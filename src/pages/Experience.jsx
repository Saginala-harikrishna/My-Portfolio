import { useState } from "react";
import experienceData from "../data/experienceData";
import ExperienceCard from "../components/experience/ExperienceCard";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState(experienceData[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          Experience
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          My professional journey across defense research,
          healthcare AI, and software development.
        </p>

      </div>

      {/* Company Selector */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {experienceData.map((exp) => (

          <button
            key={exp.id}
            onClick={() =>
              setSelectedExperience(exp)
            }
            className={`px-6 py-3 rounded-xl border transition ${
              selectedExperience.id === exp.id
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {exp.company}
          </button>

        ))}

      </div>

      {/* Selected Experience */}

      <div className="space-y-8">

  <ExperienceCard exp={selectedExperience} />

  {/* Certificate Section */}

  <div className="border rounded-3xl p-8">

    <h2 className="text-2xl font-bold mb-6">
      Certificate
    </h2>

    {selectedExperience.certificate ? (

  <img
    src={selectedExperience.certificate}
    alt="Certificate"
    className="w-full rounded-2xl border"
  />

) : (

  <div className="h-[400px] border-2 border-dashed rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <h3 className="text-xl font-semibold">
        Certificate Will Be Uploaded Soon
      </h3>
    </div>
  </div>

)}

  </div>

</div>

    </div>
  );
}