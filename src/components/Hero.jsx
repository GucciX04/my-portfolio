import React from "react";
import roi from "../assets/roi.jpg";
import whiteLines2 from "../assets/whiteLines2.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between h-[100vh] px-6"
      style={{
        backgroundImage: `url(${whiteLines2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Left: Text */}
      <div className="md:w-1/2 text-left">
        <h2 className="font-extrabold text-gray-900 mb-4 ml-20 text-6xl">
          Hi, There 👋
        </h2>
        <h2 className="text-9xl font-extrabold text-gray-900 mb-4 ml-20">
          I am <span className="text-purple-600">Roi Ballesteros </span>
        </h2>
        <p className="text-lg text-gray-600 mb-6 ml-20">
          A passionate developer who loves building web apps with React and
          Tailwind CSS.
        </p>
        <button
          className="ml-20 hover:cursor-pointer px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition font-bold"
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
          className="w-135 h-135 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
