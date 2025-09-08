import React from 'react'

export default function About() {
  return (
    <section id="about" 
            className="flex flex-col justify-center items-center  bg-white  h-[100vh]">

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I’m a beginner web developer learning React and Tailwind CSS. I
            enjoy creating clean and simple designs, and I’m building this
            portfolio to showcase my journey.
          </p>
        </div>
      </section>
  )
}
