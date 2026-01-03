"use client";
import React from "react";

export default function AboutPage() {
  return (
    //main div, then an inner div for the text
    //Notes on what to add: look at other porfolio examples, add a different picture

    <div className="flex flex-col text-left justify-items-center items-center sm:items-start sm:text-left pt-20">
      <h1 className="font-bold text-black font-mono gap-4 items-start">
        About Me
      </h1>

      <p className="text-black font-mono text-sm text-left max-w-md pt-2">
        My name is Nicole Baez Espinosa and I'm a Computer Science major at the
        University of Central Florida. I'm currently a junior and throughout my
        time in college I have participated in clubs such as the Association of
        Computing Machinery and the Society of Hispanic Professional Engineers.
      </p>
    </div>
  );
}
