import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import { createProject } from "@/actions/createProject"


const NewProjectBtn = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild><Button className='rounded-full'><Plus className='w-4 h-4' /></Button></DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-md">
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
            <DialogDescription>
              Create a new project to get started.
            </DialogDescription>
          </DialogHeader>
          <form className='flex flex-col gap-4' action={createProject}>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" name='name' placeholder="Project Name" />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="url">Project URL</Label>
                <Input id="url" name='url' placeholder="Project URL" />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name='description' placeholder="Project Description (Optional)" />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-black">Create Project</Button>
            </DialogFooter>
          </form>

        </DialogContent>
      </Dialog>

    </div>
  )
}

export default NewProjectBtn