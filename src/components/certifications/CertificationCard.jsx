export default function CertificationCard({
  certification,
}) {
  return (
    <div className="border rounded-2xl md:rounded-3xl p-5 md:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6">

        <div>

          <h2 className="text-2xl md:text-4xl font-bold">
            {certification.title}
          </h2>

          <p className="text-base md:text-xl text-gray-600 mt-2">
            {certification.issuer}
          </p>

        </div>

        <div>

          <p className="text-sm md:text-base text-gray-500">
            {certification.date}
          </p>

        </div>

      </div>

      {/* Overview */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Overview
        </h3>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {certification.description}
        </p>

      </div>

      {/* Skills */}

      <div className="mt-6 md:mt-10">

        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
          Skills Covered
        </h3>

        <div className="flex flex-wrap gap-2">

          {certification.skills.map((skill) => (
            <span
              key={skill}
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
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}