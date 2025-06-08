import { resend } from "@/lib/resend";
import VerifyEmailTemplate from "./templates/EmailVerification";

export async function sendVerificationEmail({username,email,verifyCode} : {username: string, email: string, verifyCode: string}) {
    try{
        const sendEmail = await resend.emails.send({
            from: process.env.NEXT_PUBLIC_EMAIL_FROM || "",
            to: email,
            subject: `${process.env.NEXT_PUBLIC_APP_NAME} | Verify Email`,
            react: VerifyEmailTemplate({username, otp: verifyCode}),
        })
        if(!sendEmail.data && sendEmail.error) {
            return {success: false,message: sendEmail.error.message}
        }
        return {success: true, message: "Verification email sent successfully"}
    }
    catch(err){
        console.log("Error sending verification email", err)
        return {success: false,message: "Error sending verification email"}
    }
}