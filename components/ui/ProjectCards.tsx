import React from "react";
import { cn } from "@/lib/utils";

{
  /* add: title (links to the websites), icon*/
}

const ProjectCards = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-2 mt-4 gap-8 p-4 items-start justify-center",
      className
    )}
    {...props}
  />
));

ProjectCards.displayName = "ProjectCards";

const ProjectCardContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-lime-100 rounded-xl p-4 w-50", className)}
    {...props}
  />
));

ProjectCardContainer.displayName = "ProjectCardContainer";

const ProjectCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-s text-black font-mono", className)}
    {...props}
  />
));

ProjectCardTitle.displayName = "ProjectCardTitle";

const ProjectCardImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("rounded-xl", className)} {...props} />
));

ProjectCardImage.displayName = "ProjectCardImage";

const ProjectCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs text-black font-mono pt-5", className)}
    {...props}
  />
));

ProjectCardDescription.displayName = "ProjectCardDescription";

export {
  ProjectCards,
  ProjectCardContainer,
  ProjectCardTitle,
  ProjectCardImage,
  ProjectCardDescription,
};
