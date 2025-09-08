import React from "react";
import roi from "../assets/roi.jpg";
import blue from "../assets/blue.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full">
      <div className="flex items-center  ml-20">
        <img
          src={blue}
          alt=""
          className="w-10 h-10 rounded-full mr-1 object-cover"
        />
      <h1 className="text-2xl font-bold text-purple-600">Gussi</h1>
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a
            onClick={() => {
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer hover:text-purple-600 mr-20 font-bold"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer hover:text-purple-600 mr-20 font-bold"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="mr-20 hover:cursor-pointer hover:text-purple-600 font-bold"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer hover:text-purple-600 font-bold mr-20"
          >
            Contact
          </a>
        </li>
        
      </ul>
    </nav>
  );
}
