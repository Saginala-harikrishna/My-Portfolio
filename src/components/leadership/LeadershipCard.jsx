export default function LeadershipCard({ role }) {
  return (
    <div className="border rounded-3xl p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div>

          <h2 className="text-4xl font-bold">
            {role.title}
          </h2>

          <p className="text-xl text-gray-600 mt-2">
            {role.organization}
          </p>

        </div>

        <div>

          <p className="text-gray-500">
            {role.duration}
          </p>

        </div>

      </div>

      {/* Overview */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-3">
          Overview
        </h3>

        <p className="text-gray-700">
          {role.description}
        </p>

      </div>

      {/* Responsibilities */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Responsibilities
        </h3>

        <ul className="space-y-3">

          {role.responsibilities.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}

        </ul>

      </div>

      {/* Achievements */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Achievements
        </h3>

        <ul className="space-y-3">

          {role.achievements.map((item) => (
            <li key={item}>
              ✓ {item}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}