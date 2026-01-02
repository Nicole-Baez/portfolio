"use client";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b bg-black">
      <ul className="flex gap-20 text-lg font-medium font-mono">
        <Link
          href="/"
          passHref
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Projects
        </Link>

        <Link
          href="/experience"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Experience
        </Link>

        <Link
          href="/contact"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
