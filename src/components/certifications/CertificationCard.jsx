export default function CertificationCard({
  certification,
}) {
  return (
    <div className="border rounded-3xl p-8">

      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div>

          <h2 className="text-4xl font-bold">
            {certification.title}
          </h2>

          <p className="text-xl text-gray-600 mt-2">
            {certification.issuer}
          </p>

        </div>

        <div>

          <p className="text-gray-500">
            {certification.date}
          </p>

        </div>

      </div>

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-3">
          Overview
        </h3>

        <p className="text-gray-700">
          {certification.description}
        </p>

      </div>

      <div className="mt-10">

        <h3 className="text-xl font-semibold mb-4">
          Skills Covered
        </h3>

        <div className="flex flex-wrap gap-3">

          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}