import React from "react";

function Card({ title, description, image, buttonText }) {
  return (
    <div className="card bg-base-100 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-70 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title font-bold" style={{ fontSize: "20px" }}>{title}</h1>
        <p className="font-" style={{ fontSize: "15px" }}
>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
