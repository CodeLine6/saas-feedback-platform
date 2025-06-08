import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4 h-full mt-3">
    {Array.from({length: 10}).map((_, index) => (
      <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    ))}
    </div>
  )
}

export default Loading