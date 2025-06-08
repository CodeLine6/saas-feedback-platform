import { StarIcon } from "lucide-react"

const Ratings = ({rating} : {rating: number}) => {
  return (
    <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-5 w-5 ${
                              rating > index
                                ? "fill-primary"
                                : "fill-muted stroke-muted-foreground"
                            } `}
                          />
                ))}
    </div>
  )
}

export default Ratings