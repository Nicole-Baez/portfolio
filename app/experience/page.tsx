"use client";
import { Timeline } from "@/components/ui/Timeline";
import TimeLineLayout from "@/components/ui/TimelineLayout";
import React from "react";

export default function Experience() {
  return (
    //outer div: container, inner div: the projects list
    <div className="flex flex-col items-center bg-white justify-center">
      <h3 className="font-mono text-black font-bold text-center mb-4">
        Experience:
      </h3>

      {/* make a line trailing my experience instead of embedding my resume */}
      <Timeline />
      <TimeLineLayout />
    </div>
  );
}
