import {
  CarouselItem
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { StarIcon } from "./StarIcon"

const TestimonialCard = ({ feedback }) => {
  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${
          rating > index
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ))
  }

  // Get initials from user name for avatar
  const getInitials = (name) => {
    if (!name) return "A"
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
      <div className="p-1">
        <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 select-none">
          <CardHeader className="pb-3 select-none">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold select-none">
                {getInitials(feedback?.userName)}
              </div>
              
              {/* User info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm truncate select-none">
                  {feedback?.userName || "Anonymous"}
                </h4>
                {feedback?.userEmail && (
                  <p className="text-xs text-gray-500 truncate select-none">
                    {feedback.userEmail}
                  </p>
                )}
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 select-none">
              {renderStars(feedback?.rating || 0)}
              <span className="text-sm text-gray-600 ml-1">
                ({feedback?.rating || 0}/5)
              </span>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0 select-none">
            {/* Message */}
            <blockquote className="text-gray-700 text-sm leading-relaxed select-none">
              "{feedback?.message || "No feedback provided"}"
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  )
}

export default TestimonialCard