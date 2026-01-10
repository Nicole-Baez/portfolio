"use client";
import Cards from "@/components/Cards";
import { ProjectCards } from "@/components/ui/ProjectCards";
import ProjectCardsLayout from "@/components/ui/ProjectCardsLayout";
import React from "react";

export default function Projects() {
  return (
    //outer div: container, inner div: the projects list
    <div className="flex flex-col max-w-screen-lg w-full min-h-screen items-center bg-white justify-start">
      {/* it wasn't bolding because the attribute font-medium does not exist */}
      <h1 className="font-mono text-black font-bold items-center">Projects:</h1>

      <div className="flex flex-col w-full items-center justify-center mb-20">
        <ProjectCards />
        <ProjectCardsLayout />
      </div>
    </div>
  );
}
