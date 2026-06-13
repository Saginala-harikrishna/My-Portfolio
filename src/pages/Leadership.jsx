import { useState } from "react";

import leadershipData from "../data/leadershipFullData";
import LeadershipCard from "../components/leadership/LeadershipCard";

export default function Leadership() {
  const [selectedRole, setSelectedRole] =
    useState(leadershipData[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">

      {/* Hero */}

      <div className="text-center mb-10 md:mb-16">

        <h1 className="text-4xl md:text-6xl font-bold">
          Leadership & Community
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Leadership experiences that helped me
          grow beyond technical skills and make
          an impact in the community.
        </p>

      </div>

      {/* Selector */}

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">

        {leadershipData.map((role) => (

          <button
            key={role.id}
            onClick={() =>
              setSelectedRole(role)
            }
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-xl border transition ${
              selectedRole.id === role.id
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {role.title}
          </button>

        ))}

      </div>

      {/* Selected Role */}

      <LeadershipCard role={selectedRole} />

      {/* Leadership Metrics */}

      <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-16">

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            2
          </h3>

          <p className="mt-2 text-xs md:text-base text-gray-600">
            Leadership Roles
          </p>

        </div>

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            10+
          </h3>

          <p className="mt-2 text-xs md:text-base text-gray-600">
            Community Activities
          </p>

        </div>

        <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

          <h3 className="text-2xl md:text-4xl font-bold">
            100+
          </h3>

          <p className="mt-2 text-xs md:text-base text-gray-600">
            Students Impacted
          </p>

        </div>

      </div>

    </div>
  );
}