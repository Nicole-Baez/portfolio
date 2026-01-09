"use client";
import React from "react";
import Link from "next/link";

{
  /* Fix: Timeline element was bleeding through because the NavBar did not have a fixed z-index
   - the z-index increases the priority in the stacking elements, since the timeline had pseudo elements
     the z index was necessary
  
  */
}

const NavBar = () => {
  return (
    <nav className="fixed flex top-0 w-full items-center justify-center p-[2rem] bg-red-200 z-50">
      <ul className="flex gap-20 text-lg font-medium font-mono">
        <Link
          href="/"
          passHref
          className="text-white hover:text-lime-600 transition-colors"
        >
          Home
        </Link>

        <Link
          href="#about"
          className="text-white hover:text-lime-600 transition-colors"
        >
          About
        </Link>

        <Link
          href="#projects"
          className="text-white hover:text-lime-600 transition-colors"
        >
          Projects
        </Link>

        <Link
          href="#experience"
          className="text-white hover:text-lime-600 transition-colors"
        >
          Experience
        </Link>

        <Link
          href="#contact"
          className="text-white hover:text-lime-600 transition-colors"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
