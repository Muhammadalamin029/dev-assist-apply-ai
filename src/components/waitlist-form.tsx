import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlist } from "@/services/waitlistService";

interface WaitlistFormProps {
  size?: "default" | "lg";
  variant?: "default" | "outline";
  className?: string;
}

export function WaitlistForm({
  size = "default",
  variant = "default",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await addToWaitlist(email);

      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "You'll get 5 free credits when we launch 🚀",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`flex items-center justify-center gap-2 text-green-600 dark:text-green-400 ${className}`}
      >
        <CheckCircle className="h-5 w-5" />
        <span className="font-medium">You're on the list!</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-4 ${className}`}
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 ${size === "lg" ? "h-12 text-base" : ""}`}
        disabled={isLoading}
      />
      <Button
        type="submit"
        size={size}
        variant={variant}
        disabled={isLoading}
        className={size === "lg" ? "px-8 py-4 rounded-full" : ""}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
