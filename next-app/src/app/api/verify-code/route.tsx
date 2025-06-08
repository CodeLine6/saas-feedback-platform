//import { PrismaClient } from "@prisma/client"
import { NextRequest } from "next/server";
import { db } from "@/db"
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";

export async function POST(request : NextRequest) {
    try {
        const { username, code } = await request.json()


        const user = await db.query.users.findFirst({
            where: (eq(users.username, username))
        })
       
        if (!user) {
            return Response.json({
                success: false,
                message: "User not found"
            }, {
                status: 400
            })
        }
        if (user.verifyCode !== code) {
            return Response.json({
                success: false,
                message: "Invalid OTP"
            }, {
                status: 400
            })
        }

        if (user.verifyCodeExpiry < new Date()) {
            return Response.json({
                success: false,
                message: "OTP expired"
            }, {
                status: 400
            })
        }

        await db.update(users).set({ isVerified: true }).where(eq(users.username, username))

        
        return Response.json({
            success: true,
            message: "Email verified successfully"
        }, {
            status: 200
        })
    }
    catch (error) {
        console.error("Error verifying email", error)
        return Response.json({
            success: false,
            message: "Error verifying email"
        }, {
            status: 500
        })
    }
}