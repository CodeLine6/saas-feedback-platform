import { db } from '@/db'
import { eq } from 'drizzle-orm'
import { subscriptions } from '@/db/schema'

export async function getUserSubscription(userId: number) {
    const subscription = await db.query.subscriptions.findFirst({where: (eq(subscriptions.userId, userId), eq(subscriptions.active, true))})
    return subscription
}