import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubscribeBtn from "../payments/subscribe-btn";
import { MONTHLY_SUBSCRIPTION_PLAN_ID } from "@/lib/payment";
import { Lock } from "lucide-react";


type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[]
}

const ProjectList = (props: Props) => {

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4 h-full">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`project/${project.id}`}><Button>View Project</Button></Link>
              </CardFooter>
            </Card>
          </li>
        ))}
        <Card className="max-w-[350px] flex flex-col h-full bg-gray-300">
          <CardHeader className="flex-1">
            <CardTitle className="flex flex-row text-sm nd:text-lg items-center">
              <Lock className="w-4 h-4 md:h-8 md:w-8 mr-2" />
              Upgrade to Premium
            </CardTitle>
            <CardDescription className="mt-3 ">Unlock Unlimited Projects</CardDescription>
          </CardHeader>
          <div className="w-fit mx-auto mb-4">
          <SubscribeBtn sub_plan_id={MONTHLY_SUBSCRIPTION_PLAN_ID} />
          </div>
        </Card>
      </ul>
    </div>
  )
}

export default ProjectList