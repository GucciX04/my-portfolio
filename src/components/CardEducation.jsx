import React from "react";

function CardEducation({ school, institution, period }) {
  return (
    <div className="mb-6">
      <div className="space-y-4">
        <div
          className="bg-white p-4 rounded-xl shadow-md border-l-4"
          style={{ borderLeftColor: "#222831" }}
        >
          <h3 className="font-semibold text-2xl" style={{ color: "#222831" }}>
            {school}
          </h3>
          <p className="text-1xl text-gray-600 ">{institution}</p>
          <p className="text-sm text-gray-600">{period}</p>
        </div>
      </div>
    </div>
  );
}

export default CardEducation;
