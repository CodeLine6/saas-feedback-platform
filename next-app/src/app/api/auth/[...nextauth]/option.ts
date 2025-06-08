import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import type {AuthOptions} from "next-auth"
import { sendVerificationEmail } from '@/emails/sendEmailVerifications'
import {db} from "@/db"
import { users } from "@/db/schema"
import { eq, or } from "drizzle-orm"

declare module "next-auth" {
    interface User {
        id: number;
        isVerified: boolean;
        username: string;
        firstName: string;
        lastName: string;
        contactNumber: string;
        email: string;
        image?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: number;
        isVerified?: boolean;
        username?: string;
        firstName?: string;
        lastName?: string;
        contactNumber?: string;
        email?: string;
        image?: string;
    }
}
declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            isVerified?: boolean;
            username?: string;
            firstName?: string;
            lastName?: string;
            contactNumber?: string;
            email?: string;
            image?: string;
        }
    }
}

export const authOptions : AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
              //@ts-ignore
            async authorize(credentials) {
                if (!credentials) return null

                  /* try {
                    const user = await prisma.user.findFirst({
                        where: {
                            OR : [
                                {email: credentials.identifier},
                                {username: credentials.identifier}
                            ]
                        }
                    })

                    if(!user) throw new Error("User not found")

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    if(!isPasswordCorrect) throw new Error("Incorrect password")

                    if(!user.isVerified) {
                        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
                        const expiryDate = new Date();
                        expiryDate.setHours(expiryDate.getHours() + 1);

                        await prisma.user.update({
                            where: {
                                id: user.id
                            },
                            data: {
                                verifyCode,
                                verifyCodeExpiry: expiryDate
                            }
                        })
                        
                        await sendVerificationEmail(user.email, verifyCode)

                        throw new Error(`/verify/${token.username}`)
                    }

                    return user    
                }
                catch (error) {
                    throw new Error(error)
                } */


                try {
                    const user = await db.query.users.findFirst({
                        where: or(
                            eq(users.username, credentials.identifier),
                            eq(users.email, credentials.identifier)
                        )
                    })
                    if(!user) throw new Error("User not found")
                    
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    if(!isPasswordCorrect) throw new Error("Incorrect password")

                    if(!user.isVerified) {
                        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
                        const expiryDate = new Date();
                        expiryDate.setHours(expiryDate.getHours() + 1);

                        await db.update(users).set({verifyCode, verifyCodeExpiry: expiryDate}).where(eq(users.id, user.id))
                        await sendVerificationEmail({username: user.username, email: user.email, verifyCode})

                        throw new Error(`/verify/${user.username}`)
                    }
                    return user
                }
                catch (error) {
                    throw new Error(error as string)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session}) {

            if(user) {
                token.id  = parseInt(user.id.toString())
                token.isVerified = user.isVerified
                token.username = user.username
                token.email = user.email
                token.firstName = user.firstName
                token.lastName = user.lastName
                token.image = user.image
                token.contactNumber = user.contactNumber
            }

            if(trigger === "update" && session) {
                return {...token,...session.user}
            }
            return token
        },
        async session({ session, token }) {
            if(token.id && session) {
                session.user.id = token.id
                session.user.isVerified = token.isVerified
                session.user.username = token.username
                session.user.email = token.email
                session.user.firstName = token.firstName
                session.user.lastName = token.lastName
                session.user.image = token.image
                session.user.contactNumber = token.contactNumber
            }
            return session
        },
    },
    pages: {
        signIn: "/sign-in",
        newUser: "/sign-up",
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
    
}