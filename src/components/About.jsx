import React from "react";
import roi from "../assets/roi.jpg";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.svg";
import node from "../assets/node.png";
import js from "../assets/js.png";
import pict from "../assets/1x1.png";
import whitelines from "../assets/whiteLinesEnhancce.png";
import coding from "../assets/codingg.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py- bg-gray-50 px-6"
    >
      <div className="mt-10 max-w-full grid md:grid-cols-3 gap-10 items-start py-10 ml-5 mr-5">
        {/* Left Side: About Me */}
        <div>
          <h1 className="text-7xl font-bold mb-7 text-gray-900">About Me</h1>
          <p
            className="text-gray-700 mb-6 tracking-wide"
            style={{ fontSize: "20px" }}
          >
            I'm Roi Nathaniel Ballesteros, graduate of Bachelor of Science in
            Information Technology at the La Consolacion University Philippines.
            I am a dedicated and passionate web developer with a knack for
            creating visually appealing and user-friendly websites.
          </p>

        

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <img
              src={coding}
              alt="Me on bike"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Middle: Education & Tech Stack */}
        <div>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">
            Education
          </h2>
          <div className="space-y-4">
            {/* Card 1 */}
            <div
              className="bg-white p-4 rounded-xl shadow-md border-l-4"
              style={{ borderLeftColor: "#222831" }}
            >
              <h3
                className="font-semibold text-lg"
                style={{ color: "#222831" }}
              >
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-sm text-gray-600">La Consolacion University</p>
              <p className="text-sm text-gray-600">College - 2022 – Present</p>
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
          </div>
          {/* Tech Stack */}
          <div className="bg-gray-100 shadow rounded-xl p-6 mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              My Tech Stack
            </h2>
            <div className="flex justify-center gap-10 flex-wrap">
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

        {/* Right Side: Contacts */}
        <div>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">
            Contact Me
          </h2>
          <p
            className="text-gray-700 mb-6 tracking-wide"
            style={{ fontSize: "20px" }}
          >Feel free to contact me anytime.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white border border-black-300 text-gray-900 outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white border border-black-300 text-gray-900 outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white border border-black-300 text-gray-900 outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
