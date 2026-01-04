"use client";
import React, { ReactNode } from "react";

interface CardElements {
  title: string;
  image: string;
  descriptions: string;
}

{
  /* for now it'll accept a title, image and description */
}
export default function Cards({ title, image, descriptions }: CardElements) {
  return (
    <div className="flex flex-col bg-green-100 rounded-xl p-6 px-10 py-5 w-[250px] h-[420px] gap-4">
      {/* each one is for title, pictures, descriptions, and tags */}
      <h3 className="text-lg font-bold font-mono mb-4">{title}</h3>

      <div className="h-40 w-full overflow-hidden rounded-xl items-center">
        <img className="h-full w-full object-contain" src={image} />
      </div>

      <p className="text-black font-mono text-sm">{descriptions}</p>
    </div>
  );
}
