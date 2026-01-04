"use client";
import Cards from "@/components/layout/Cards";
import React from "react";

export default function Projects() {
  return (
    //outer div: container, inner div: the projects list
    <div className="flex flex-col w-full items-center bg-white justify-start sm:items-start sm:text-left text-left">
      {/* it wasn't bolding because the attribute font-medium does not exist */}
      <h1 className="font-mono text-black font-bold items-start">Projects:</h1>

      <div className="flex flex-row gap-8 mt-4">
        <Cards
          title="Brûlée"
          image="/images/brulee.jpg"
          descriptions="Designed most of the front-end using Figma and implemented it by using React, Next.js, Tailwind CSS and JavaScipt. Collaborated with a team of 4 to develop the website for a small local jewelry business."
        />

        <Cards
          title="SHPE Mobile App"
          image="/images/shpe.jpg"
          descriptions="Collaborated with the SHPE tech committee members to design and develop a mobile app for club members. Worked on the QR code scanner features using Flutter and Dart."
        />

        <Cards
          title="AI Meal Recommender"
          image="/images/ai_meal.jpg"
          descriptions="Currently working on the backend of an AI meal recommender web app using Python and Flask. The app suggests meals based on user input in a quiz-style manner. Designed the front-end using Canva."
        />
      </div>
    </div>
  );
}
