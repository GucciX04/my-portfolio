import React from "react";
import roi from "../assets/roi.jpg";
import CardEducation from "./CardEducation";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.svg";
import js from "../assets/js.png";
import node from "../assets/node.png";
import CardTechStack from "./CardTechStack";
import OllamaChat from "./OllamaChat";
import maezy from "../assets/fefef.png";

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
    {
      title: "HTML5",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      title: "Python",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
  ];

  return (
    <section className="text-black py-16 px-8 md:px-20 bg-gradient-to-br from-white via-blue-100 to-blue-400">
      {/* title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-12 tracking-tight">
        About <span className="text-blue-700">Me</span>
      </h1>

      {/* layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* left */}
        <div className="flex justify-center md:mb-0 md:mt-0">
          <img
            src={roi}
            alt="Profile"
            className="rounded-4xl shadow-lg w-140 h-200 object-cover border-8 border-blue-700"
          />
        </div>

        {/* right */}
        <div className="mt-10 md:mt-0">
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
        <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-10">
          <div className="flex flex-wrap justify-center items-center mb-6 gap-8 md:gap-20">
            {TechStack.map((tech, index) => (
              <CardTechStack key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Ollama Chat Component */}
      <OllamaChat />
    </section>
  );
}
