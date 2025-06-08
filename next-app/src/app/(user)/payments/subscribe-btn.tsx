"use client"
import { Button } from "@/components/ui/button"
import {useState} from "react"
import {useRouter} from "next/navigation"
import { useSession } from 'next-auth/react'
import {Loader2} from "lucide-react"
import { MONTHLY_SUBSCRIPTION_PLAN_ID } from "@/lib/payment"

type Props = {
    sub_plan_id: string
}

const SubscribeBtn = ({sub_plan_id} : Props) => {
    const router = useRouter()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState("")
    const { data: session, status } = useSession()  // Add status here
    const user = session?.user

    const handleCheckout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/create-subscription",{
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({sub_plan_id})
            }) 

            const parsedRes = await res.json()

            OnPayment(parsedRes.id)


        }
        catch (error) {
            setError("Something went wrong")
            setLoading(false)
        }

    }


    const OnPayment = (subscription_id:string) => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          subscription_id,
          name: "Feedbackify",
          description: sub_plan_id == MONTHLY_SUBSCRIPTION_PLAN_ID ? "Monthly Subscription"  : "Yearly Subscription",
          handler: (resp:any) => {
              console.log("Razor response",resp);
              setLoading(false)
          } 
        }
  
        //@ts-ignore 
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    if(error) {
        return <p>{error}</p>
    }

    return (
        <Button onClick={handleCheckout} disabled={loading} className="bg-indigo-700">{
            loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Subscribe Now"
        }</Button>
    )
}

export default SubscribeBtn