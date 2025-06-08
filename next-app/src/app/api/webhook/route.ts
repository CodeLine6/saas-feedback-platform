import { NextResponse } from "next/server";
import { db } from "../../../db";
import { Transactions, subscriptions } from "../../../db/schema";
import { eq } from "drizzle-orm";
import crypto from 'crypto';

const relevantEvents = new Set( ["subscription.authenticated", "subscription.charged", "subscription.cancelled", "subscription.completed"]);

export async function POST(request: Request) {
  try {
    // First, clone the request to use for signature verification
    const clonedRequest = request.clone();
    
    // Get the raw body as text for signature validation
    const rawBody = await clonedRequest.text();
    
    // Get the Razorpay signature from headers
    const razorpaySignature = request.headers.get('x-razorpay-signature');
    
    if (!razorpaySignature) {
      return NextResponse.json({ error: 'Missing Razorpay signature' }, { status: 401 });
    }
    
    // Get webhook secret from environment variables
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    if (!webhookSecret) {
      console.error('Webhook secret not found in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    
    // Create a HMAC SHA256 hash using the webhook secret
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody)
      .digest('hex');
    
    // Compare the calculated signature with the one from Razorpay
    const isAuthentic = expectedSignature === razorpaySignature;
    
    if (!isAuthentic) {
      console.error('Invalid webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // Parse the JSON body
    const body = JSON.parse(rawBody);

    if(relevantEvents.has(body.event)) {
        const subscriptionId = body.payload.subscription.entity.id;

        if (body.event == "subscription.authenticated") {
            await db.update(subscriptions)
            .set({ active: true })
            .where(eq(subscriptions.id, subscriptionId))
        }
        else if (body.event == "subscription.charged") {
            const transactionId = body.payload.payment.entity.id;

            await db.insert(Transactions).values({
                subscriptionId,
                transactionId
            });
   
        }
        else if (body.event == "subscription.cancelled" || body.event == "subscription.completed") {
            await db.update(subscriptions)
            .set({ active: false })
            .where(eq(subscriptions.id, subscriptionId));
        }
        return NextResponse.json({ success: true });
    }
    
  } catch (error) {
    console.error('Error validating webhook signature:', error);
    return NextResponse.json({ error: 'Failed to validate webhook signature' }, { status: 500 });
  }
}