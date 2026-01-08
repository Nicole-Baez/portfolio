"use client";
import { ContactCards } from "@/components/ui/ContactCards";
import ContactCardsLayout from "@/components/ui/ContactCardsLayout";
import React from "react";

export default function ContactPage() {
  return (
    //outer div: container, inner div: the projects list
    <div className="flex flex-col w-full h-screen items-center bg-white justify-center">
      <h3 className="font-mono text-black font-bold items-center pl-40">
        Contact:
      </h3>

      <ContactCards />
      <ContactCardsLayout />
    </div>
  );
}
