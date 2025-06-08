import { NextRequest, NextResponse } from "next/server"
import { subscriptions } from "@/db/schema";
import { db } from "@/db"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import Razorpay from "razorpay";

const saveSubscription = async (subscriptionId: string) => {
        const session = await getServerSession(authOptions)
        const user = session?.user
        if(!user) return
        await db.insert(subscriptions).values({
            id: subscriptionId, 
            userId: user.id,
        })
}

export async function POST(req : NextRequest) {

    const {sub_plan_id} = await req.json();

    const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

    const result = await instance.subscriptions.create({
        plan_id:sub_plan_id,
        customer_notify:1,
        quantity:1,
        total_count:1,
        addons:[],
        notes: {
            key1:'Feedback Subscription',
        }
    })
    
    await saveSubscription(result.id)

    return NextResponse.json(result)
}