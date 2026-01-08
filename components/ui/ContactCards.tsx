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
      "w-full grid grid-cols-2 gap-15 mt-4 items-start justify-start pl-30",
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
    className={cn("bg-lime-100 rounded-xl w-50 h-15 p-3", className)}
    {...props}
  />
));

Container.displayName = "Container";

const IconContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-full w-2 h-2 items-start justify-start", className)}
    {...props}
  />
));

Container.displayName = "IconContainer";

export { ContactCards, Container, IconContainer };
