import {
  CarouselItem
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const TestimonialCard = ({ feedback }) => {
  return (
    <CarouselItem>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Rating: {feedback?.rating}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{feedback?.message}</p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};
export default TestimonialCard
