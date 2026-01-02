"use client";
import React from "react";

export default function AboutPage() {
  return (
    //main div
    <div className="flex flex-row w-full h-screen items-center bg-white justify-start gap-20">
      <img
        className="rounded-full w-40 h-40 ml-40"
        src="/images/Proffesional Pic.jpg"
      />

      <h1 className="font-bold text-black font-mono gap-2 items-start py-10">
        About Me
      </h1>
    </div>
  );
}
