import React, { useState } from "react";
import blue from "../assets/blue.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // to close the sidebar
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center ml-6">
        <img
          src={blue}
          alt="logo"
          className="w-12 h-12 rounded-full mr-2 object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800">Gussi</h1>
      </div>

      {/* Hamburger Icon*/}
      <div className="md:hidden mr-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 cursor-pointer"
        >
          {isOpen ? (
            // (X) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 items-center text-gray-700 font-medium mr-12">
        <li>
          <a
            onClick={() => handleScroll("hero")}
            className="hover:cursor-pointer hover:text-blue-600 font-bold text-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => handleScroll("about")}
            className="hover:cursor-pointer hover:text-blue-600 font-bold text-lg"
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => handleScroll("projects")}
            className="hover:cursor-pointer hover:text-blue-600 font-bold text-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={() => handleScroll("contact")}
            className="hover:cursor-pointer hover:text-blue-600 font-bold text-lg"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button inside Sidebar */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start space-y-6 p-6 text-gray-700 font-medium">
          <li>
            <a
              onClick={() => handleScroll("hero")}
              className="hover:text-blue-600 font-bold text-lg cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("about")}
              className="hover:text-blue-600 font-bold text-lg cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("projects")}
              className="hover:text-blue-600 font-bold text-lg cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-600 font-bold text-lg cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
