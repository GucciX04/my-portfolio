import React from "react";
import Card from "./Card";
import roi from "../assets/roi.jpg";
import discaya from "../assets/discaya.webp";
import jinggoy from "../assets/jinggoy.webp";
import joel from "../assets/joel.webp";
import bitoy from "../assets/bitoy.jpeg";
import memoryGame from "../assets/memoryGame.png";
export default function Projects() {
  const projects = [
    {
      title: "Memory Game",
      description: "Memory game build with JS, HTML and CSS",
      image: memoryGame,
      buttonText: "Buy Now",
    },
    {
      title: "Adidas Ultraboost",
      description: "Premium comfort sneakers for everyday wear.",
      image: joel,
      buttonText: "Order Now",
    },
    {
      title: "Puma Runner",
      description: "Durable shoes for sports and outdoor activities.",
      image: jinggoy,
      buttonText: "Shop Now",
    },
    {
      title: "Converse Classic",
      description: "Timeless design with modern comfort.",
      image: bitoy,
      buttonText: "Explore",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 border-2 border-gray-300 rounded-lg"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        My Projects
      </h2>

      {/* Container with margin */}
      <div className="max-w-6xl mx-auto overflow-hidden relative">
        <div className="flex animate-scroll gap-6 w-max">
          {/* Duplicate cards set twice for infinite loop */}
          {Array.from({ length: 2 }).map((_, i) =>
            projects.map((project, index) => (
              <Card
                key={`${i}-${index}`}
                {...project} // spread operator = passes all props (title, description, etc.)
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
