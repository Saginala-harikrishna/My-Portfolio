import { useState } from "react";

import leadershipData from "../data/leadershipFullData";
import LeadershipCard from "../components/leadership/LeadershipCard";

export default function Leadership() {
  const [selectedRole, setSelectedRole] =
    useState(leadershipData[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          Leadership & Community
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Leadership experiences that helped me
          grow beyond technical skills and make
          an impact in the community.
        </p>

      </div>

      {/* Role Selector */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {leadershipData.map((role) => (

          <button
            key={role.id}
            onClick={() =>
              setSelectedRole(role)
            }
            className={`px-6 py-3 rounded-xl border transition ${
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

      {/* Leadership Highlights */}

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="border rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            2
          </h3>

          <p className="mt-2 text-gray-600">
            Leadership Roles
          </p>

        </div>

        <div className="border rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            10+
          </h3>

          <p className="mt-2 text-gray-600">
            Community Activities
          </p>

        </div>

        <div className="border rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            100+
          </h3>

          <p className="mt-2 text-gray-600">
            Students Impacted
          </p>

        </div>

      </div>

    </div>
  );
}