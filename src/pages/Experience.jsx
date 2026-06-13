import { useState } from "react";
import experienceData from "../data/experienceData";
import ExperienceCard from "../components/experience/ExperienceCard";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState(experienceData[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">

      {/* Hero */}

      <div className="text-center mb-10 md:mb-16">

        <h1 className="text-4xl md:text-6xl font-bold">
          Experience
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          My professional journey across defense research,
          healthcare AI, and software development.
        </p>

      </div>

      {/* Company Selector */}

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">

        {experienceData.map((exp) => (

          <button
            key={exp.id}
            onClick={() =>
              setSelectedExperience(exp)
            }
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-xl border transition ${
              selectedExperience.id === exp.id
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {exp.company}
          </button>

        ))}

      </div>

      {/* Experience Card */}

      <ExperienceCard exp={selectedExperience} />

      {/* Certificate */}

      <div className="border rounded-2xl md:rounded-3xl p-5 md:p-8 mt-6 md:mt-8">

        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Certificate
        </h2>

        {selectedExperience.certificate ? (

          <img
            src={selectedExperience.certificate}
            alt="Certificate"
            className="w-full rounded-xl md:rounded-2xl border"
          />

        ) : (

          <div className="h-[250px] md:h-[400px] border-2 border-dashed rounded-xl md:rounded-2xl flex items-center justify-center">

            <div className="text-center">

              <h3 className="text-lg md:text-xl font-semibold">
                Certificate Will Be Uploaded Soon
              </h3>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}