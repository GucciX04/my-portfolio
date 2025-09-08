import React from 'react'

export default function Contacts() {
  return (
    <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
          <p className="text-gray-600 mb-10">
            Interested in working together or just want to say hi? Feel free to
            reach out via email below 👇
          </p>
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Say Hello
          </a>
        </div>
      </section>
  )
}
