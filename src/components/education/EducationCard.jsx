export default function EducationCard({ education }) {
  return (
    <div className="border rounded-3xl p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div>
          <h2 className="text-4xl font-bold">
            {education.title}
          </h2>

          <p className="text-xl text-gray-600 mt-2">
            {education.institution}
          </p>
        </div>

        <div className="text-right">

          <p className="font-medium">
            {education.duration}
          </p>

          <p className="text-2xl font-bold mt-2">
            {education.score}
          </p>

        </div>

      </div>

      {/* Description */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-3">
          Overview
        </h3>

        <p className="text-gray-700">
          {education.description}
        </p>

      </div>

      {/* Highlights */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Key Subjects & Areas
        </h3>

        <div className="flex flex-wrap gap-3">

          {education.highlights.map((item) => (
            <span
              key={item}
              className="px-4 py-2 border rounded-full"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

      {/* Achievements */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Achievements
        </h3>

        <ul className="space-y-3">

          {education.achievements.map((item) => (
            <li key={item}>
              ✓ {item}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}