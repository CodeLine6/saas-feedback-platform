import { db } from '@/db'; // Path to your Drizzle ORM setup
import { NextRequest, NextResponse } from 'next/server';
import { feedbacks } from '@/db/schema';

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const body = await req.json();
    const { projectId, userName, userEmail, message, rating } = body;

    // Validate required fields
    if (!projectId || !userName || !userEmail || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Call the PostgreSQL function using Drizzle
    const result = await db.insert(feedbacks).values({
      projectId: Number(projectId),
      userName: userName,
      userEmail: userEmail,
      message: message,
      rating: Number(rating),
    })

    //@ts-ignore
    const feedbackId = result[0]?.feedback_id;

    return NextResponse.json({ feedbackId }, { status: 200 });
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: 'Failed to add feedback' }, { status: 500 });
  }
}
