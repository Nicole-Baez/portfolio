import { cn } from "@/lib/utils";
import React from "react";

{
  /* this was gathered from a tutorial, this file has all the components */
}
{/* changes i want to make: center the line and dots, make the boxes alternate */}
const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));

Timeline.displayName = "Timeline";

const TimelineElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("group relative pb-8 pl-8 sm:pl-44", className)}
    {...props}
  />
));

Timeline.displayName = "TimelineElement";

{
  /* this component makes the timeline dot, the before controls the line and the after controls the dots in the timeline */
}
const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref} 
    className={cn(
      "mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-lime-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-2 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]"
    )}
    {...props}
  />
));

Timeline.displayName = "TimelineHeader";

const TimelineContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-red-200 rounded-xl", className)}
    {...props}
  />
));

Timeline.displayName = "TimelineContainer";

const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-s font-mono text-black underline p-4 text-left",
      className
    )}
    {...props}
  />
));

Timeline.displayName = "TimelineTitle";

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-s font-mono text-black text-left p-4", className)}
    {...props}
  />
));

Timeline.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineElement,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineContainer,
};
