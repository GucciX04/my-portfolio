import React from "react";
import contactImage from "../assets/node.png";

export default function Contact() {
  return (
    <section
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-12"
      id="contacts"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center bg-white/10 rounded-2xl p-8 backdrop-blur-md">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={contactImage}
            alt="Contact Illustration"
            className="w-80 md:w-[400px] drop-shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white/20 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <form className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
