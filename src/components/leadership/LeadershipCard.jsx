export default function LeadershipCard({ role }) {
  return (
    <div className="border rounded-2xl md:rounded-3xl p-5 md:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6">

        <div>

          <h2 className="text-2xl md:text-4xl font-bold">
            {role.title}
          </h2>

          <p className="text-base md:text-xl text-gray-600 mt-2">
            {role.organization}
          </p>

        </div>

        <div>

          <p className="text-sm md:text-base text-gray-500">
            {role.duration}
          </p>

        </div>

      </div>

      {/* Overview */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Overview
        </h3>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {role.description}
        </p>

      </div>

      {/* Responsibilities */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Responsibilities
        </h3>

        <ul className="space-y-2 md:space-y-3">

          {role.responsibilities.map((item) => (
            <li
              key={item}
              className="text-sm md:text-base"
            >
              • {item}
            </li>
          ))}

        </ul>

      </div>

      {/* Achievements */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Achievements
        </h3>

        <ul className="space-y-2 md:space-y-3">

          {role.achievements.map((item) => (
            <li
              key={item}
              className="text-sm md:text-base"
            >
              ✓ {item}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}