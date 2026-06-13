export default function ExperienceCard({ exp }) {
  return (
    <div className="border rounded-2xl md:rounded-3xl p-5 md:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6">

        <div>

          <h2 className="text-2xl md:text-4xl font-bold">
            {exp.company}
          </h2>

          <p className="text-base md:text-xl text-gray-600 mt-2">
            {exp.role}
          </p>

        </div>

        <div className="md:text-right">

          <p className="font-medium text-sm md:text-base">
            {exp.location}
          </p>

          <p className="text-gray-500 text-sm md:text-base">
            {exp.duration}
          </p>

        </div>

      </div>

      {/* Project */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Project
        </h3>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {exp.project}
        </p>

      </div>

      {/* Technologies */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-2">

          {exp.technologies.map((tech) => (

            <span
              key={tech}
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
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* Responsibilities */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Responsibilities
        </h3>

        <ul className="space-y-2 md:space-y-3">

          {exp.responsibilities.map((item) => (

            <li
              key={item}
              className="text-sm md:text-base"
            >
              • {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Learnings */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Key Learnings
        </h3>

        <ul className="space-y-2 md:space-y-3">

          {exp.achievements.map((item) => (

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