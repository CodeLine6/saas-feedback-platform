"use server"

import {db} from "@/db"
import { projects } from "@/db/schema"
import { authOptions } from "@/app/api/auth/[...nextauth]/option"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export async function createProject(data: FormData) {
    const session = await getServerSession(authOptions) 
    
    if(!session) return

    const project = {
        name: data.get("name") as string,
        description: data.get("description") as string,
        url: data.get("url") as string,
        userId: session?.user.id
    }

    const [newProjectId] = await db.insert(projects).values(project).returning({insertedId: projects.id})
    redirect(`/project/${newProjectId.insertedId}/instructions`)

}