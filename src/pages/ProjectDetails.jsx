import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          Project Not Found
        </h1>

        <Link
          to="/projects"
          className="inline-block mt-6 px-4 py-2 border rounded-xl"
        >
          Back To Projects
        </Link>
      </div>
    );
  }

  const currentIndex = projectsData.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projectsData[
      (currentIndex + 1) % projectsData.length
    ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">

      {/* Back Button */}

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm md:text-base text-gray-600 hover:text-black transition"
      >
        ← Back to Projects
      </Link>

      {/* Hero */}

      <section className="mt-6 md:mt-10">

        <p className="uppercase tracking-wider text-xs md:text-sm text-gray-500">
          {project.category}
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mt-3 md:mt-4 leading-tight">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-base md:text-xl text-gray-600 mt-3 md:mt-4">
            {project.subtitle}
          </p>
        )}

        <p className="mt-5 md:mt-8 text-sm md:text-lg text-gray-700 max-w-4xl leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Action Buttons */}

        <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10">

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                px-4
                md:px-6
                py-2.5
                md:py-3
                text-sm
                md:text-base
                border
                rounded-xl
                hover:bg-gray-100
                transition
              "
            >
              GitHub
            </a>
          )}

        </div>

      </section>

      {/* About */}

      <section className="mt-12 md:mt-24">

        <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          About The Project
        </h2>

        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
          {project.about}
        </p>

      </section>

      {/* Features */}

      <section className="mt-12 md:mt-24">

        <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-3 md:gap-5">

          {project.features?.map((feature) => (
            <div
              key={feature}
              className="
                border
                rounded-xl
                md:rounded-2xl
                p-4
                md:p-5
                text-sm
                md:text-base
                hover:shadow-md
                transition
              "
            >
              ✓ {feature}
            </div>
          ))}

        </div>

      </section>

      {/* Tech Stack */}

      <section className="mt-12 md:mt-24">

        <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3">

          {project.techStack?.map((tech) => (
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

      </section>

      {/* Learnings */}

      <section className="mt-12 md:mt-24">

        <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          What I Learned
        </h2>

        <div className="space-y-3 md:space-y-4">

          {project.learnings?.map((item) => (
            <div
              key={item}
              className="
                border
                rounded-xl
                md:rounded-2xl
                p-4
                md:p-5
                text-sm
                md:text-base
              "
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* Next Project */}

      <section className="mt-12 md:mt-24 border-t pt-6 md:pt-10">

        <p className="text-sm md:text-base text-gray-500">
          Continue Exploring
        </p>

        <Link
          to={`/projects/${nextProject.slug}`}
          className="
            inline-block
            mt-3
            md:mt-4
            text-lg
            md:text-2xl
            font-bold
            hover:underline
          "
        >
          Next Project → {nextProject.title}
        </Link>

      </section>

    </div>
  );
}