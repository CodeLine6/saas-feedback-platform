"use client"

import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { subscriptions } from "@/db/schema"
import { eq, InferSelectModel } from "drizzle-orm"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Subscription = InferSelectModel<typeof subscriptions>

const ManageSubscription = ({subscription} : {subscription: Subscription}) => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const handleCancelSubscription = async () => {
        setLoading(true)
        fetch(`/api/cancel-subscription/${subscription.id}`, {method: "POST"}).then(res => res.json()).then(async resp => {
          console.log(resp.data)
          if(resp.data.error) return setError(resp.data.error)
          const currentDate = new Date()
          const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
          const result = await db.update(subscriptions).set({expiresOn: nextMonthDate}).where(eq(subscriptions.id,subscription.id))
          window.location.reload()
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }
    

    return (
        <div className="flex flex-col gap-4">
            <Button
                disabled={loading}
                onClick={handleCancelSubscription}
                variant="destructive"
            >
                {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Cancel Subscription
            </Button>
        </div>      
    )
}

export default ManageSubscription