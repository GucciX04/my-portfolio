import React from "react";
import Card from "./Card";
import roi from "../assets/roi.jpg";
import discaya from "../assets/discaya.webp";
import jinggoy from "../assets/jinggoy.webp";
import joel from "../assets/joel.webp";
import bitoy from "../assets/bitoy.jpeg";
import memoryGame from "../assets/memoryGame.png";
import safehub from "../assets/safehub.png"
import game from "../assets/game.png"
export default function Projects() {
  const projects = [
    {
      title: "Memory Game",
      description: "Memory game build with JS, HTML and CSS",
      image: memoryGame,
      buttonText: "Explore",
    },
    {
      title: "Safehub",
      description: "Mental Health AI chatbot with online counselling for La Consolacion University",
      image: safehub,
      buttonText: "Explore",
    },
    {
      title: "Top Down Shooter",
      description: "Top shooter game made from Godot software.",
      image: game,
      buttonText: "Explore",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 border-2 border-gray-300 rounded-lg"
    >
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
        My Projects
      </h2>

      {/* Container with margin */}
      <div className="max-w-8xl mx-auto overflow-hidden relative">
        <div className="flex animate-scroll gap-6 w-max">
          {/* Duplicate cards set twice for infinite loop */}
          {Array.from({ length: 2 }).map((_, i) =>
            projects.map((project, index) => (
              <Card
                
                {...project} // spread operator = passes all props (title, description, etc.)
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
