import contactData from "../data/contactData";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          Let's Build Something Meaningful
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Interested in AI, automation,
          software development, or collaboration?
          I'd love to connect.
        </p>

      </div>

      {/* Status */}

      <div className="border rounded-3xl p-8 mt-16 text-center">

        <h2 className="text-3xl font-bold">
          Current Status
        </h2>

        <p className="mt-4 text-green-600 font-semibold">
          {contactData.status}
        </p>

      </div>

      {/* Contact Methods */}

      <div className="grid md:grid-cols-2 gap-6 mt-16">

        <a
          href={`mailto:${contactData.email}`}
          className="border rounded-3xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold">
            Email
          </h3>

          <p className="mt-3 text-gray-600">
            {contactData.email}
          </p>
        </a>

        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noreferrer"
          className="border rounded-3xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold">
            LinkedIn
          </h3>

          <p className="mt-3 text-gray-600">
            Connect professionally
          </p>
        </a>

        <a
          href={contactData.github}
          target="_blank"
          rel="noreferrer"
          className="border rounded-3xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold">
            GitHub
          </h3>

          <p className="mt-3 text-gray-600">
            Explore my repositories
          </p>
        </a>

        <a
          href={contactData.youtube}
          target="_blank"
          rel="noreferrer"
          className="border rounded-3xl p-8 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold">
            YouTube
          </h3>

          <p className="mt-3 text-gray-600">
            Watch my content
          </p>
        </a>

      </div>

      {/* Focus Areas */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Areas of Interest
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

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
              className="px-5 py-3 border rounded-full"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}