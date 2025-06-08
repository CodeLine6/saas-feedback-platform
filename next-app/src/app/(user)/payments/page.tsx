import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { authOptions } from '@/app/api/auth/[...nextauth]/option'
import { getServerSession } from 'next-auth'
import { subscriptions } from '@/db/schema'
import ManageSubscription from './manage-subscription'

const page = async () => {
    const session = await getServerSession(authOptions)
    const user = session?.user

    if (!user) return null

    const subscription = await db.query.subscriptions.findFirst({where: (eq(subscriptions.userId, user?.id), eq(subscriptions.active, true))})
    const plan = subscription && subscription.active ? "Premium" : "Free"
    return (
        <div className='p-4 border rounded-md'>
            <h1 className='text-4xl mb-3'>Subscription Details</h1>
            <p className='mb-2 text-lg'>
                Your current plan is: {plan}
            </p>
            {subscription && <ManageSubscription subscription={subscription}/>}
        </div>
    )
}

export default page