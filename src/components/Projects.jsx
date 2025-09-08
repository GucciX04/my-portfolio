import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-6 h-[100vh] grid place-items-center">
        <div className="max-w-5xl  text-center w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            My Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project Card */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Project 1
              </h3>
              <p className="text-gray-600">
               --
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Project 2
              </h3>
              <p className="text-gray-600">
                --
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Project 3
              </h3>
              <p className="text-gray-600">
                --
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
