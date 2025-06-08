import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request, { params }: { params: { subscriptionId: string } }) {

  const { subscriptionId } = params;

  if (!subscriptionId) {
    return NextResponse.json({ error: "Subscription ID is required" }, { status: 400 });
  }

  try {
    const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_KEY!,
});
    const result = instance.subscriptions.cancel(subscriptionId, {
      cancel_at_cycle_end: true,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    return NextResponse.json({ error: "Failed to cancel subscription" }, { status: 500 });
  }
}