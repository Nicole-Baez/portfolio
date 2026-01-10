"use client";
import { ContactCards } from "@/components/ui/ContactCards";
import ContactCardsLayout from "@/components/ui/ContactCardsLayout";
import React from "react";

export default function ContactPage() {
  return (
    //outer div: container, inner div: the projects list
    <div className="flex flex-col w-full items-center h-screen bg-white justify-center">
      <h3 className="font-mono text-black font-bold text-center">Contact:</h3>

      <div className="flex flex-col w-full items-center justify-center">
        <ContactCards />
        <ContactCardsLayout />
      </div>
    </div>
  );
}
