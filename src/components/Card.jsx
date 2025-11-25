import React, { useState } from "react";

function Card({ title, description, image, buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-gray-blue-900 rounded-lg ">
        <figure>
          <img
            src={isHovered ? "https://raw.githubusercontent.com/AetherKnowledge/React-Tutorial-3-State/refs/heads/main/public/pirate.jpg" : image}
            alt={title}
            className="h-150 w-full object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body p-4">
          <h1 className="card-title font-bold text-2xl md:text-3xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl">{description}</p>
          <div className="card-actions justify-end mt-4">
            <button
              className="btn h-10 w-32 rounded-3xl"
              style={{
                color: "#DFD0B8",
                backgroundColor: isHovered ? "#0074D9" : "#222831",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-sm">{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;