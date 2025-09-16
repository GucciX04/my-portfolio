import React from "react";
import roi from "../assets/roi.jpg";
import whiteLines2 from "../assets/whiteLines2.png";
import whitelines from "../assets/whiteLinesEnhancce.png";
import fb from "../assets/fb.png"
import github from "../assets/github.png"
import gmail from "../assets/gmail.webp"
import telegram from "../assets/telegram.webp"
export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between h-[100vh] px-6"
      style={{
        backgroundImage: `url(${whitelines})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Left: Text */}
      <div className="md:w-1/2 text-left">
        <h2
          className="font-extrabold text-gray-900 mb-4 ml-20 text-6xl"
          style={{ color: "#393E46" }}
        >
          Hello I'm👋
        </h2>
        <h2
          className="text-9xl font-extrabold text-gray-900 mb-4 ml-20"
          style={{ color: "#393E46" }}
        >
          <span className style={{ color: "#000000" }}>
            Roi Ballesteros{" "}
          </span>
        </h2>
        <p className="text-2xl text-gray-600 mb-6 ml-20">
          A passionate developer who loves building web apps with React and
          Tailwind CSS.
        </p>
        <div className="flex ml-20 gap-5 mb-4">
          <img
            src={fb}
            alt="fb"
            className="w-15 h-15 rounded-full object-cover shadow-lg"
          />
          <img
            src={gmail}
            alt="Roi"
            className="w-15 h-15 rounded-full object-cover shadow-lg"
          />
          <img
            src={github}
            alt="Roi"
            className="w-15 h-15 rounded-full object-cover shadow-lg"
          />
          <img
            src={telegram}
            alt="Roi"
            className="w-15 h-15 rounded-full object-cover shadow-lg"
          />
        </div>
        <button
          className="mt-5 w-55 h-15 ml-20 hover:cursor-pointer px-6 py-3 text-gray rounded-full shadow-md transition font-bold"
          style={{ color: "#DFD0B8", backgroundColor: "#222831" }}
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
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={roi}
          alt="Roi"
          className="w-200 h-200 rounded-full object-cover shadow-lg"
        />
        
      </div>
      
    </section>
  );
}
