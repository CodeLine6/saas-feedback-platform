import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from "./TestimonialCard";

const TestimonialsWidget = ({projectId}) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const APP_URL = import.meta.env.VITE_FEEDBACK_APP_URL;

      const response = await fetch(`${APP_URL}/api/get-feedbacks?projectId=${projectId}`);
      const data = await response.json();
      setFeedbacks(data);
      setLoading(false);
    };
    fetchFeedbacks();
  }, [projectId]);

  if (loading) {
    return <div className="animate-spin"><Loader2 className="mr-2 h-4 w-4 animate-spin" /></div>;
  }
  
  return (
    <Carousel>
      <CarouselContent>
      {feedbacks.map((feedback) => (
        <TestimonialCard feedback={feedback} />
      ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default TestimonialsWidget
