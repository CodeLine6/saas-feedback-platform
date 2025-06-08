import SubscribeBtn from "../subscribe-btn";
import { MONTHLY_SUBSCRIPTION_PLAN_ID, YEARLY_SUBSCRIPTION_PLAN_ID } from "@/lib/payment";
const page = ({searchParams} : {
    searchParams: {
        plan: string
    }
}) => {
    const {plan} = searchParams
    const planId = plan == "yearly" ? YEARLY_SUBSCRIPTION_PLAN_ID : MONTHLY_SUBSCRIPTION_PLAN_ID
    console.log(plan);
    return (
        <div className="flex items-center justify-between border p-4 rounded-md">
            <h1 className="text-2xl font-bold">
                Start your subscription now
            </h1>
            <div className="w-fit">
            <SubscribeBtn sub_plan_id={planId} />
            </div>
        </div>
    )
}

export default page
