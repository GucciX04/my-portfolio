import React, { useState } from "react";

function Card({ title, description, image, buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="-screen justify-center items-center">
      <div className="mt-card bg-base-100 w-250 shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-blue-900 rounder-lg">
        <figure>
          <img
            src={image}
            alt={title}
            className="h-140 w-full object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title font-bold" style={{ fontSize: "35px" }}>
            {title}
          </h1>
          <p style={{ fontSize: "25px" }}>{description}</p>
          <div className="card-actions justify-end ">
            <button
              className="btn h-15 w-40 rounded-3xl "
              style={{
                color: "#DFD0B8",
                backgroundColor: isHovered ? "#0074D9" : "#222831",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p style={{ fontSize: "15px" }}>{buttonText}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
