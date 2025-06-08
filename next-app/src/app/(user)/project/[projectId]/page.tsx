
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { projects } from "@/db/schema"
import Link from "next/link"
import { ChevronLeft, Globe, Code  } from "lucide-react"
import Table from "@/components/tables/feedbacks"

const page = async ({ params }: {
  params: {
    projectId: string
  }
}) => {
  if (!params.projectId) return (<div>Invalid Project ID</div>)
  const project = await db.query.projects.findFirst({ where: eq(projects.id, Number(params.projectId)), with: { feedbacks: true } })
  return (
    <div>
      <div>
        <Link href="/dashboard" className='flex items-center text-indigo-700 mb-5 w-fit'>
          <ChevronLeft />
          <span className='text-lg'>Back to Projects</span>
        </Link>
      </div>
      <div className="flex justify-between items-start">
        <div className="project-info">
          <h1 className="text-3xl font-bold mb-3">{project?.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">{project?.description}</h2>
        </div>
        <div className="flex flex-col">
        {project ? <Link href={project.url} className="underline text-indigo-700 flex gap-2 items-center">
          <Globe className="w-4 h-4" /> <span>Visit Site</span>
        </Link> : null}
        <Link href={`/project/${params.projectId}/instructions`} className="underline text-indigo-700 flex items-center mt-2">
            <Code className="h-5 w-5 mr-1" /><span className="text-lg">Embed Code</span></Link>
        </div>
      </div>
      <div>
        <Table data={project? project.feedbacks : [] } />
      </div>
    </div>
  )
}

export default page