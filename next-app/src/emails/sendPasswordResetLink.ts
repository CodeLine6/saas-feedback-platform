import { resend } from "@/lib/resend";
import ResetPasswordLink from "@/emails/templates/ResetPasswordLink";

export async function sendPasswordResetLink({username,email,resetPasswordToken} : {username: string, email: string, resetPasswordToken: string}) {
    try {
        const sendEmail =  await resend.emails.send({
            from: "reset@clonestoxx.instantmarket.ing",
            to: email,
            subject: "Clonestoxx | Reset Password",
            react: ResetPasswordLink({username, resetPasswordToken}),
        })
        if(!sendEmail.data && sendEmail.error) {
            return {success: false,message: sendEmail.error.message}
        }
        return {success: true, message: "Password reset link sent successfully"}
    }

    catch(err){
        console.error("Error sending password reset link", err)
        return {success: false,message: "Error sending password reset link"}
    }
}