import { authOptions } from '@/app/api/auth/[...nextauth]/option'
import NewProjectBtn from '@/components/NewProject'
import { db } from '@/db'
import { projects } from '@/db/schema'
import { getServerSession } from 'next-auth'
import { eq } from 'drizzle-orm'
import ProjectList from './ProjectList'
import { getUserSubscription } from '@/actions/userSubscription'
import { MAX_FREE_PROJECTS } from '@/lib/payment'
const page = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) return
  const allProjects = await db.select().from(projects).where(eq(projects.userId, user?.id))
  const subscribed = await getUserSubscription(user.id)
  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
        { (!(subscribed?.active) && allProjects.length == MAX_FREE_PROJECTS) ? null : <NewProjectBtn />
        }
      </div>
      <ProjectList projects={allProjects} />
    </div>
  )
}

export default page