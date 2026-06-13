export default function EducationCard({ education }) {
  return (
    <div className="border rounded-2xl md:rounded-3xl p-5 md:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6">

        <div>

          <h2 className="text-2xl md:text-4xl font-bold">
            {education.title}
          </h2>

          <p className="text-base md:text-xl text-gray-600 mt-2">
            {education.institution}
          </p>

        </div>

        <div className="md:text-right">

          <p className="font-medium text-sm md:text-base">
            {education.duration}
          </p>

          <p className="text-xl md:text-2xl font-bold mt-2">
            {education.score}
          </p>

        </div>

      </div>

      {/* Overview */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Overview
        </h3>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {education.description}
        </p>

      </div>

      {/* Subjects */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Key Subjects & Areas
        </h3>

        <div className="flex flex-wrap gap-2">

          {education.highlights.map((item) => (
            <span
              key={item}
              className="
                px-3
                md:px-4
                py-1.5
                md:py-2
                border
                rounded-full
                text-xs
                md:text-sm
              "
            >
              {item}
            </span>
          ))}

        </div>

      </div>

      {/* Achievements */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Achievements
        </h3>

        <ul className="space-y-2 md:space-y-3">

          {education.achievements.map((item) => (
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