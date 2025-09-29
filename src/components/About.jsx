import React from "react";
import roi from "../assets/roi.jpg";
import CardEducation from "./CardEducation";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.svg";
import js from "../assets/js.png";
import node from "../assets/node.png";
import CardTechStack from "./CardTechStack";

export default function About() {
  const educationData = [
    {
      school: "Bachelor of Science in Information Technology",
      institution: "La Consolacion University Philippines",
      period: "2019 - 2023",
    },
    {
      school: "Paombong High School",
      institution:
        "Science, Technology, Engineering, and Mathematics (STEM) Strand",
      period: "Senior High School - 2020 - 2022",
    },
    {
      school: "Paombong High School",
      institution: "Junior High School",
      period: "2016 - 2020",
    },
    {
      school: "Pulo Elementary School",
      institution: "Elementary School",
      period: "2010 - 2016",
    },
  ];

  const TechStack = [
    { title: "React", imgSrc: react },
    { title: "JavaScript", imgSrc: js },
    { title: "Node.js", imgSrc: node },
    { title: "Tailwind CSS", imgSrc: tailwind },
  ];

  return (
    <section className=" text-black py-16 px-8 md:px-20">
      {/* title */}
      <h1 className="text-7xl font-bold text-center mb-12">
        About <span className="text-blue-700">Me</span>
      </h1>

      {/* layoput */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        {/* left */}
        <div className="flex justify-center">
          <img
            src={roi}
            alt="Profile"
            className="rounded-lg shadow-lg w-180 h-160 object-cover"
          />
        </div>

        {/* right */}
        <div>
          <p className="mb-6 text-2xl leading-relaxed">
            I'm Roi Nathaniel Ballesteros, graduate of Bachelor of Science in
            Information Technology at the La Consolacion University Philippines.
            I am a dedicated and passionate web developer with a knack for
            creating visually appealing and user-friendly websites.
          </p>

          {/* education */}
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Education</h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <CardEducation key={index} {...edu} />
            ))}
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center mt-10">
          <div className="flex space-x-100">
            {TechStack.map((tech, index) => (
              <CardTechStack key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
