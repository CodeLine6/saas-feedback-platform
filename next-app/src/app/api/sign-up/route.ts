import bcrypt from 'bcrypt'
import { sendVerificationEmail } from '@/emails/sendEmailVerifications'
import { NextRequest } from "next/server";
import { db } from '@/db'
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
export async function POST(request: NextRequest) {
    
    try {
        const { username, email, password, firstName, lastName, contactNumber } = await request.json()

        const existingUserByUsername = await db.query.users.findFirst({
            where: (eq(users.username, username), eq(users.isVerified, true))
        })
        

        if (existingUserByUsername) {
            return Response.json({
                success: false,
                message: "Username is already taken"
            }, {
                status: 400
            }
            );
        }
      
        const existingUserByEmail = await db.query.users.findFirst({
            where: eq(users.email, email)
        })

        if(existingUserByEmail) {
            return Response.json({
                success: false,
                message: "Email is already taken"
            }, {
                status: 400
            })
        }

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);

            const newUser = await db.insert(users).values({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                firstName,
                lastName,
                contactNumber,
            })

              // send verification email
        /* const emailResponse = await sendVerificationEmail({ username, email:"delivered@resend.dev", verifyCode })
        if (!emailResponse.success) {
            console.log("Error sending verification email", emailResponse.message)
            return Response.json({
                success: false,
                message: emailResponse.message
            }, {
                status: 500
            })
        } */

        return Response.json({
            success: true,
            message: "User registered successfully. Please verify your email"
        }, {
            status: 201
        })

    }
    catch(error) {
        console.log("Error registering user", error)
        return Response.json({
            success: false,
            message: "Error registering user"
        }, {
            status: 500
        })
    }
}
