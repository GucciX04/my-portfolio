import React from "react";
import roi from "../assets/roi.jpg";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.svg";
import node from "../assets/node.png";
import js from "../assets/js.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side (About Me text + image) */}
        <div>
          <h2 className="text-5xl font-bold mb-7 text-gray-900">About Me</h2>
          <p
            className="text-gray-700 mb-6 tracking-wide"
            style={{ fontSize: "20px" }}
          >
            I'm Roi Nathaniel Ballesteros, graduate of Bachelor of Science in
            Information Technology at the La Consolacion University Philippines.
            I am a dedicated and passionate web developer with a knack for
            creating visually appealing and user-friendly websites.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-md mb-6 text-center">
            <p className="text-4xl font-bold text-indigo-600"></p>
            <p className="text-gray-600 text-sm"></p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <img
              src={roi}
              alt="Me on bike"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Right Side (Education Section like reference) */}
        <div>
          <h2 className="text-3xl font-bold mt-20 ml-7 mb-6  text-gray-900">Education</h2>

          <div className="space-y-4 ml-7">
            {/* Card 1 */}
            <div
              className="bg-white p-4 rounded-xl shadow-md border-l-4"
              style={{ borderLeftColor: "#222831" }}
            >
              <h3
                className="font-semibold text-lg text-purple-500"
                style={{ color: "#222831" }}
              >
                Bachelor of Science in Information Technology
              </h3>

              <p className="text-sm text-gray-600">
                La Consolacion University 
              </p>
              <p className="text-sm text-gray-600">
                College - 2022 – Present
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-4 rounded-xl shadow-md border-l-4"
              style={{ borderLeftColor: "#222831" }}
            >
              <h3
                className="font-semibold text-lg"
                style={{ color: "#222831" }}
              >
                Paombong High School Inc.
              </h3>
              <p className="text-sm text-gray-600">
                Science, Technology, Engineering and Mathematics
              </p>
              <p className="text-sm text-gray-600">
                Senior High School - 2020 - 2022
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-4 rounded-xl shadow-md border-l-4"
              style={{ borderLeftColor: "#222831" }}
            >
              <h3
                className="font-semibold text-lg"
                style={{ color: "#222831" }}
              >
               Paombong High School Inc.
              </h3>
              <p className="text-sm text-gray-600">
                Junior High School - 2016 - 2020
              
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white p-4 rounded-xl shadow-md border-l-4"
              style={{ borderLeftColor: "#222831" }}
            >
              <h3
                className="font-semibold text-lg"
                style={{ color: "#222831" }}
              >
                Pulo Elementary School
              </h3>
              <p className="text-sm text-gray-600" style={{ color: "#222831" }}>
                Primary Education - 2010 - 2016
              </p>
            </div>

            <div className="bg-gray shadow rounded-xl p-6 mt-10">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                My Tech Stack
              </h2>
              <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center">
                  <img src={react} alt="React" className="w-16 h-16" />
                  <p className="mt-2 text-gray-700">React</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={js} alt="JavaScript" className="w-16 h-16" />
                  <p className="mt-2 text-gray-700">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={tailwind} alt="TailwindCSS" className="w-16 h-16" />
                  <p className="mt-2 text-gray-700">Tailwind</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={node} alt="Node.js" className="w-16 h-16" />
                  <p className="mt-2 text-gray-700">Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
