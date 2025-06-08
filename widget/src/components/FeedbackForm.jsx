import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import tailwindStyles from "../index.css?inline";
import { StarIcon } from "./StarIcon";
import { MessageCircleIcon } from "./MessageCircleIcon";

const FeedbackFormWidget = ({projectId}) => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);
  const onSelectStar = (index) => {
    setRating(index + 1);
  };

  const submit = async (e) => {
    e.preventDefault();
    const APP_URL = import.meta.env.VITE_FEEDBACK_APP_URL;
    const form = e.target;
    const formData = {
      userName: form.name.value,
      userEmail: form.email.value,
      message: form.feedback.value,
      rating,
      projectId
    };
    try {
      const response = await fetch(`${APP_URL}/api/add-feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Feedback added with ID:", data.feedbackId);
        setSubmitted(true);
      } else {
        console.error("Error adding feedback:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="widget fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full shadow-lg hover:scale-105">
              <MessageCircleIcon className="mr-1 h-5 w-5" />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={4}
            align="end"
            className="widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md"
          >
            <style>{tailwindStyles}</style>
            <div>
              {submitted ? (
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-lg font-semibold">
                    Thanks for your feedback!
                  </h3>
                  <p className="mt-4">
                    We appreciate your feedback. It helps us improve our product
                    and provide better service to our users.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">Feedback</h3>
                  <form className="space-y-2" onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback">Feedback</Label>
                      <Textarea
                        id="feedback"
                        name="feedback"
                        placeholder="Tell us about your experience"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-5 w-5 cursor-pointer ${
                              rating > index
                                ? "fill-primary"
                                : "fill-muted stroke-muted-foreground"
                            } `}
                            onClick={() => onSelectStar(index)}
                          />
                        ))}
                      </div>
                      <Button type="submit">Submit</Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default FeedbackFormWidget;