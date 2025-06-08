//import { PrismaClient } from "@prisma/client"
import { db } from "@/db"
import {z} from "zod";
import { userNameValidation } from "@/schemas/userSchema";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";

const UsernameQuerySchema = z
    .object({
        username: userNameValidation
    })

export async function GET(request : Request) {
    try {
        const { searchParams } = new URL(request.url)
        const queryParams = {
            username: searchParams.get("username")
        }
        const result = UsernameQuerySchema.safeParse(queryParams)
        if(!result.success) {
            const usernameErrors = result.error.format().username?._errors || []
            return Response.json({success: false, message: usernameErrors?.length > 0 ? usernameErrors.join(", ") : "Error checking username"}, {status: 400})
        }
        const {username} = result.data;

        const existingVerifiedUser = await db.query.users.findFirst({
            where: (eq(users.username, username), eq(users.isVerified, true))
        })

        if(existingVerifiedUser) {
            return Response.json({success: false, message: "Username is already taken"}, {status: 400})
        }
        
        return Response.json({success: true, message: "Username is available"}, {status: 200})
    }
    catch(error) {
        console.error("Error checking username", error)
        return Response.json({success: false, message: "Error checking username"}, {status: 500})
    }
}