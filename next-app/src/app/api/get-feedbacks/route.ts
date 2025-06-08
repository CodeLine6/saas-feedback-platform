import { db } from "@/db"
import { eq } from "drizzle-orm"
import { projects  } from "@/db/schema"
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get('projectId');

    if (!projectId) {
        return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    try {
        const project = await db.query.projects.findFirst({ where: eq(projects.id, Number(projectId)), with: { feedbacks: true} });
        return NextResponse.json(project ? project.feedbacks : []);
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        return NextResponse.json({ error: "Failed to fetch feedbacks" }, { status: 500 });
    }
}
