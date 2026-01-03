"use client";
import Cards from "@/components/layout/Cards";
import React from "react";

export default function Projects() {
  return (
    //outer div: container, inner div: the projects list
    <div className=" flex font-bold flex-col w-full h-screen items-center bg-white justify-start sm:items-start text-left">
      <h1 className="font-medium font-mono text-black font-bold text-bold justify-start">
        Projects
      </h1>

      <div className="flex flex-row gap-8 mt-4">
        <Cards
          title="Brulee"
          image="/images/Proffesional Pic.jpg"
          descriptions="Testinggg"
        />

        <Cards
          title="SHPE Mobile App"
          image="/images/Proffesional Pic.jpg"
          descriptions="Testinggg"
        />

        <Cards
          title="AI Meal Recommender"
          image="/images/Proffesional Pic.jpg"
          descriptions="Testinggg"
        />
      </div>
    </div>
  );
}
