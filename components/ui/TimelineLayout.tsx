"use client";
import React from "react";
import {
  Timeline,
  TimelineContainer,
  TimelineDescription,
  TimelineElement,
  TimelineHeader,
  TimelineTitle,
} from "./Timeline";

{
  /*
    * Timeline layout adapted from:
        https://github.com/Tourniercy/shadcn-timeline?tab=readme-ov-file
    * Modified by me for personal portfolio
    
*/
}

interface TimeLineLayoutInfo {
  id: number;
  title: string;
  isEven?: boolean;
  dates: string;
  description: string;
}

export default function TimeLineLayout() {
  const timelineData: TimeLineLayoutInfo[] = [
    {
      id: 1,
      isEven: false,
      title: "Undergraduate Researcher @ DRACO",
      description:
        "Currently working on the Shadow AI project. Conducted research on several hugging face fine tuned models for our CPU benchmarks",
      dates: "Oct 2025 - Present",
    },

    {
      id: 2,
      title: "Tech Committee Member @ SHPE",
      isEven: true,
      description:
        "Collaborated with tech committee members on two separate projects. Learned and implemented technologies such as React, Next.js, Tailwind CSS, Flutter and Dart.",
      dates: "Mar 2025 - Aug 2025",
    },

    {
      id: 3,
      title: "Undergraduate Learning Assistant @ UCF",
      isEven: false,
      description:
        "Led in-person labs where I assisted students with their weekly Python coding challenges. Worked closely with students through weekly office hours to help them succeed in the COP 2500C course.",
      dates: "Jun 2024 - Apr 2025",
    },
  ];

  return (
    <Timeline>
      {timelineData.map((item) => (
        <TimelineElement className="bg-transparent" key={item.id}>
          <TimelineContainer>
            <TimelineHeader>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineHeader>
          </TimelineContainer>
        </TimelineElement>
      ))}
    </Timeline>
  );
}
