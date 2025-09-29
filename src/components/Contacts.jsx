import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const Information = [
    {
      icon: faEnvelope,
      text: "roigalmanballesteros@gmail.com",
    },
    {
      icon: faPhoneVolume,
      text: "0921-403-1394",
    },
    {
      icon: faLocationDot,
      text: "Paombong, Bulacan, Philippines",
    },
  ];

  const ContactForm = [
    {
      label: "Your Name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      label: "Your Email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      label: "Write your message here",
      type: "text",
      placeholder: "Your Message",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-100">
      <h1 className="text-center text-5xl md:text-7xl font-extrabold mb-12 text-black-700 drop-shadow">
        Get in <span className=" text-blue-700">Touch</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center mx-4 md:mx-16 lg:mx-32">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col justify-between border-l-8 border-blue-700">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black-700 text-center md:text-left">
              Let's Talk
            </h2>
            <p
              className="mb-6 text-gray-700 text-center md:text-left"
              style={{ fontSize: "20px" }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              to me through any of the platforms below:
            </p>
            <div className="space-y-4">
              {Information.map((info, index) => (
                <div key={index} className="flex items-center">
                  <FontAwesomeIcon
                    icon={info.icon}
                    className="text-4xl text-blue-700 mr-4"
                  />
                  <span className=" text-gray-800" style={{ fontSize: "20px" }}>
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col justify-center border-r-8 border-blue-700">
          <form className="space-y-6">
            {ContactForm.map((field, index) => (
              <div key={index}>
                <label className="block mb-2 font-semibold text-black-700 "
                style={{ fontSize: "20px" }}>
                  {field.label}
                </label>
                {field.label === "Write your message here" ? (
                  <textarea
                    placeholder={field.placeholder}
                    rows={7}
                    className="w-full px-4 py-3 rounded-lg border border-blue-700 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-blue-700 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
