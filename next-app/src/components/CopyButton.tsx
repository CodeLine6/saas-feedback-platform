"use client"

import { Clipboard } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const CopyButton = ({ text }: { text: string }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={() => navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard"))}
                        className="text-slate-50 absolute top-2 right-2"
                    >
                        <Clipboard className="w-4 h-4" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Copy</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default CopyButton