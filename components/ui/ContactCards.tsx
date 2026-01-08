import React from "react";
import { cn } from "@/lib/utils";

{
  /* add: title (links to the websites), icon*/
}

const ContactCards = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full grid grid-cols-2 gap-25 mt-4 items-start justify-start pl-20",
      className
    )}
    {...props}
  />
));

ContactCards.displayName = "ContactCards";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-lime-100 rounded-xl w-60 h-15 p-3", className)}
    {...props}
  />
));

Container.displayName = "Container";

export { ContactCards, Container };
