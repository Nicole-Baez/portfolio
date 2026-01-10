"use client";
import React from "react";

export default function AboutPage() {
  return (
    //main div, then an inner div for the text
    //Notes on what to add: look at other porfolio examples, add a different picture

    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center text-center max-w-xl">
        <h1 className="font-bold text-black font-mono">About Me:</h1>

        <p className="text-black font-mono pt-4">
          My name is Nicole Baez Espinosa and I'm a Computer Science major at
          the University of Central Florida. I'm currently a junior and an
          Undergraduate Researcher at the UCF DRACO Lab. I'm always looking for
          a challenge and open to learn as much as possible about the world of
          software development :)
        </p>
      </div>
    </div>
  );
}
