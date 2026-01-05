"use client";
import React from "react";

export default function AboutPage() {
  return (
    //main div, then an inner div for the text
    //Notes on what to add: look at other porfolio examples, add a different picture

    <div className="flex flex-col w-full text-center justify-center sm:items-center sm:text-center pt-20 pl-65">
      <h1 className="font-bold text-black font-mono gap-4">About Me:</h1>

      <p className="text-black font-mono pt-2">
        My name is Nicole Baez Espinosa and I'm a Computer Science major at the
        University of Central Florida. I'm currently a junior and throughout my
        time in college I have participated in clubs such as the Association of
        Computing Machinery and the Society of Hispanic Professional Engineers.
      </p>
    </div>
  );
}
