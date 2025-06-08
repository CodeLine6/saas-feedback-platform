"use client"
import { Button } from '@/components/ui/button'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const HeroCta = () => {

    const { data: session, status } = useSession()
    const user = session?.user
    const router = useRouter();

    if (status === "unauthenticated" || !user) {
       return  <div className='flex gap-3'>
            <Button onClick={() => router.push("/sign-up")}>Get Started</Button>
            <Button variant="secondary" onClick={() => signIn()}>Sign In</Button>
        </div>
    }

    return (
        <>
            
        </>
    )
}

export default HeroCta