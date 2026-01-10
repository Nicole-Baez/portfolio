import { cn } from "@/lib/utils";
import React from "react";

{
  /* this was gathered from a tutorial, this file has all the components */
}
{
  /* changes i want to make: center the line and dots, make the boxes alternate */
}

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
    className={cn("group relative sm:pl-10", className)}
    {...props}
  />
));

Timeline.displayName = "TimelineElement";

{
  /* this component makes the timeline dot, the before controls the line and the after controls the dots in the timeline */
}

{
  /*
  
  mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-lime-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-2 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]
  
  */
}

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex flex-col items-start before:absolute before:h-full before:-translate-x-1/2 before:translate-y-13 before:bg-lime-300 before:px-px after:absolute after:h-full after:box-content after:h-1 after:w-1 after:-translate-x-1/2 after:translate-y-10 after:rounded-full after:border-4 after:border-lime-500 after:bg-lime-500 group-last:before:hidden",
      className
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
    className={cn("bg-red-100 rounded-xl w-45", className)}
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

const TimelineDates = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xs font-mono font-bold text-black text-left p-4",
      className
    )}
    {...props}
  />
));

Timeline.displayName = "TimelineDates";

export {
  Timeline,
  TimelineElement,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineDates,
  TimelineContainer,
};
