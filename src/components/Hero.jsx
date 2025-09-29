import roi from "../assets/roi.jpg";
import whiteLines2 from "../assets/whiteLines2.png";
import whitelines from "../assets/whiteLinesEnhancce.png";
import fb from "../assets/fb.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.webp";
import telegram from "../assets/telegram.webp";

import React, { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-8"
      style={{
        backgroundImage: `url(${whitelines})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mx-20">
        <h2
          className="font-extrabold mb-2 md:mb-4 text-3xl sm:text-4xl md:text-6xl"
          style={{ color: "#393E46" }}
        >
          Hello I'm👋
        </h2>
        <h2
          className="font-extrabold mb-2 md:mb-4 text-5xl sm:text-7xl md:text-9xl"
          style={{ color: "#393E46" }}
        >
          <span style={{ color: "#000000" }}>Roi Ballesteros </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 md:mb-6 max-w-md md:max-w-none">
          A passionate developer who loves building web apps with React and
          Tailwind CSS.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mb-4">
          <img
            src={fb}
            alt="fb"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
          />
          <img
            src={gmail}
            alt="gmail"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
          />
          <img
            src={github}
            alt="github"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
          />
          <img
            src={telegram}
            alt="telegram"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
          />
        </div>
        <button
          className="btn w-full sm:w-60 h-12 rounded-3xl mt-3 md:mt-5 font-bold"
          style={{
            color: "#DFD0B8",
            backgroundColor: isHovered ? "#0074D9" : "#222831",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View My Projects
        </button>
      </div>

      {/* Right: Image */}
      <div className="w-full  md:w-1/2 flex justify-center mt-8 md:mt-50">
        <img
          src={roi}
          alt="Roi"
          className="w-64 h-64 sm:w-200 sm:h-200 md:w-200 md:h-200 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
