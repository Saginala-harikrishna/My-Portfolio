export default function ExperienceCard({ exp }) {
  return (
    <div className="border rounded-3xl p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div>

          <h2 className="text-4xl font-bold">
            {exp.company}
          </h2>

          <p className="text-xl text-gray-600 mt-2">
            {exp.role}
          </p>

        </div>

        <div className="text-right">

          <p className="font-medium">
            {exp.location}
          </p>

          <p className="text-gray-500">
            {exp.duration}
          </p>

        </div>

      </div>

      {/* Project */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-3">
          Project
        </h3>

        <p className="text-gray-700">
          {exp.project}
        </p>

      </div>

      {/* Technologies */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-3">

          {exp.technologies.map((tech) => (

            <span
              key={tech}
              className="px-4 py-2 border rounded-full"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* Responsibilities */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Responsibilities
        </h3>

        <ul className="space-y-3">

          {exp.responsibilities.map((item) => (

            <li key={item}>
              • {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Learnings */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Key Learnings
        </h3>

        <ul className="space-y-3">

          {exp.achievements.map((item) => (

            <li key={item}>
              ✓ {item}
            </li>

          ))}

        </ul>

      </div>

     

    </div>
  );
}