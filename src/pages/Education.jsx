import { useState } from "react";

import educationData from "../data/educationData";
import EducationCard from "../components/education/EducationCard";

export default function Education() {
  const [selectedEducation, setSelectedEducation] =
    useState(educationData[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">

      {/* Hero */}

      <div className="text-center mb-10 md:mb-16">

        <h1 className="text-4xl md:text-6xl font-bold">
          Education
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          My academic journey from school to
          engineering and beyond.
        </p>

      </div>

      {/* Selector */}

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">

        {educationData.map((edu) => (

          <button
            key={edu.id}
            onClick={() =>
              setSelectedEducation(edu)
            }
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-xl border transition ${
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-16">

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            99.6%
          </h3>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            School
          </p>

        </div>

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            94.3%
          </h3>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            Diploma
          </p>

        </div>

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            B.Tech
          </h3>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            8.65
          </p>

        </div>

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            CS
          </h3>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            General
          </p>

        </div>

      </div>

    </div>
  );
}