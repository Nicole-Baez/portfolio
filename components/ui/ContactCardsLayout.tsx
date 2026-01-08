import React from "react";

import { ContactCards, Container } from "./ContactCards";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FaLinkedin } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

interface ContactInfo {
  id: number;
  userName: string;
  icon: IconType;
  link: string;
}

export default function ContactCardsLayout() {
  const contactData: ContactInfo[] = [
    {
      id: 1,
      userName: "Nicole-Baez",
      icon: FaGithub,
      link: "https://github.com/Nicole-Baez",
    },

    {
      id: 2,
      userName: "Nicole Baez Espinosa",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/nicole-esp/",
    },

    {
      id: 3,
      userName: "Nicole Baez Espinosa",
      icon: SiHandshake,
      link: "https://app.joinhandshake.com/profiles/fsqvpv",
    },

    {
      id: 4,
      userName: "Nicole Baez Espinosa",
      icon: BiLogoGmail,
      link: "mailto:nicolebaezesp@gmail.com",
    },
  ];

  return (
    <ContactCards>
      {contactData.map((contact) => (
        <Container key={contact.id}>
          <div className="flex flex-row">
            <contact.icon className="w-8 h-8 items-center" />
            <a
              href={contact.link}
              className="font-mono text-black text-xs p-1 pl-4 items-start"
            >
              {contact.userName}
            </a>
          </div>
        </Container>
      ))}
    </ContactCards>
  );
}
