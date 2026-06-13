import contactData from "../data/contactData";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">

      {/* Hero */}

      <div className="text-center">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let's Build Something Meaningful
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Interested in AI, automation,
          software development, or collaboration?
          I'd love to connect.
        </p>

      </div>

      {/* Status */}

      <div className="border rounded-2xl md:rounded-3xl p-6 md:p-8 mt-12 md:mt-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold">
          Current Status
        </h2>

        <p className="mt-4 text-green-600 font-semibold text-sm md:text-base">
          {contactData.status}
        </p>

      </div>

      {/* Contact Methods */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">

        <a
          href={`mailto:${contactData.email}`}
          className="border rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl md:text-2xl font-bold">
            Email
          </h3>

          <p className="mt-3 text-gray-600 text-sm md:text-base break-all">
            {contactData.email}
          </p>
        </a>

        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl md:text-2xl font-bold">
            LinkedIn
          </h3>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Connect professionally
          </p>
        </a>

        <a
          href={contactData.github}
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl md:text-2xl font-bold">
            GitHub
          </h3>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Explore my repositories
          </p>
        </a>

        <a
          href={contactData.youtube}
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-lg transition"
        >
          <h3 className="text-xl md:text-2xl font-bold">
            YouTube
          </h3>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Watch my content
          </p>
        </a>

      </div>

      {/* Focus Areas */}

      <div className="mt-12 md:mt-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Areas of Interest
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4">

          {[
            "Artificial Intelligence",
            "Automation",
            "Machine Learning",
            "Web Development",
            "Open Source",
            "Content Creation",
          ].map((item) => (
            <span
              key={item}
              className="px-3 md:px-5 py-2 md:py-3 border rounded-full text-xs md:text-sm"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}