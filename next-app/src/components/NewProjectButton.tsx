"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

const NewProjectButton = () => {
    const {pending} = useFormStatus();

    return (
    <Button className="bg-black" type="submit">{pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...</> : "Create Project"}</Button>
  )
}

export default NewProjectButton