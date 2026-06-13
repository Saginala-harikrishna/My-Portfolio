import { useState } from "react";

import educationData from "../data/educationData";
import EducationCard from "../components/education/EducationCard";

export default function Education() {
  const [selectedEducation, setSelectedEducation] =
    useState(educationData[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          Education
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          My academic journey from school to
          engineering and beyond.
        </p>

      </div>

      {/* Selector */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {educationData.map((edu) => (

          <button
            key={edu.id}
            onClick={() =>
              setSelectedEducation(edu)
            }
            className={`px-6 py-3 rounded-xl border transition ${
              selectedEducation.id === edu.id
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {edu.title}
          </button>

        ))}

      </div>

      {/* Selected Education */}

      <EducationCard
        education={selectedEducation}
      />

      {/* Academic Highlights */}

      <div className="grid md:grid-cols-4 gap-6 mt-16">

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            99.6%
          </h3>
          <p className="mt-2 text-gray-600">
            School
          </p>
        </div>

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            94.3%
          </h3>
          <p className="mt-2 text-gray-600">
            Diploma
          </p>
        </div>

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            B.Tech
          </h3>
          <p className="mt-2 text-gray-600">
            8.65
          </p>
        </div>

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            CS
          </h3>
          <p className="mt-2 text-gray-600">
           General
          </p>
        </div>

      </div>

    </div>
  );
}