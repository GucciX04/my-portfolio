import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 px-6 min-h-[100vh] flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">My Projects</h2>

        {/* Flexbox Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Project Card */}
          <div className="card bg-base-100 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Copy same card */}
          <div className="card bg-base-100 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
