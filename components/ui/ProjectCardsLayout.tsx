import React from "react";

import {
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCards,
  ProjectCardTitle,
} from "./ProjectCards";
import { ProjectCardContainer } from "./ProjectCards";

interface ProjectCardsInfo {
  id: number;
  projectName: string;
  image: string;
  description: string;
  repoLink: string;
}

export default function ProjectCardsLayout() {
  const projectData: ProjectCardsInfo[] = [
    {
      id: 1,
      projectName: "Brûlée",
      image: "/images/brulee.jpg",
      description:
        "Designed most of the front-end using Figma and implemented it by using React, Next.js, Tailwind CSS and JavaScipt. Collaborated with a team of 4 to develop the website for a small local jewelry business.",
      repoLink: "https://github.com/jaysprogram/Brulee",
    },

    {
      id: 2,
      projectName: "SHPE Mobile App",
      image: "/images/shpe.jpg",
      description:
        "Collaborated with the SHPE tech committee members to design and develop a mobile app for club members. Worked on the QR code scanner features using Flutter and Dart.",
      repoLink: "https://github.com/Bousef/shpe-mobile-2025",
    },

    {
      id: 3,
      projectName: "AI Meal Recommender",
      image: "/images/ai_pic.jpg",
      description:
        "Recently started working on the backend component of an AI meal recommender web app using Python and Flask. The app suggests meals based on user input in a quiz-style manner. Designed the front-end using Canva.",
      repoLink: "https://github.com/Nicole-Baez/meal-recommender",
    },
  ];

  return (
    <ProjectCards className="items-center justify-center">
      {projectData.map((project) => (
        <ProjectCardContainer key={project.id}>
          <ProjectCardTitle>{project.projectName}</ProjectCardTitle>
          <ProjectCardImage
            src={project.image}
            alt={project.description}
            className="items-center justify-center p-2"
          />
          <ProjectCardDescription>{project.description}</ProjectCardDescription>
        </ProjectCardContainer>
      ))}
    </ProjectCards>
  );
}
