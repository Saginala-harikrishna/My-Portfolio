import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import ImageCarousel from "../components/projects/ImageCarousel";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">
          Project Not Found
        </h1>

        <Link
          to="/projects"
          className="inline-block mt-8 px-5 py-3 border rounded-xl"
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
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Back */}

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition"
      >
        ← Back to Projects
      </Link>

      {/* Hero */}

      <section className="mt-10">

        <p className="uppercase tracking-widest text-gray-500">
          {project.category}
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          {project.subtitle}
        </p>

        <p className="mt-8 text-lg text-gray-700 max-w-4xl leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Action Buttons */}

        <div className="flex flex-wrap gap-4 mt-10">

          {/* <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition"
          >
            Live Demo
          </a> */}

          {project.github && project.github !== "#" && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
  >
    GitHub
  </a>
)}

          {/* <a
            href={project.video}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
          >
            Video Walkthrough
          </a> */}

        </div>

      </section>

      {/* Snapshot */}

      


      {/* About */}

      <section className="mt-24">

        <h2 className="text-4xl font-bold mb-8">
          About The Project
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          {project.about}
        </p>

      </section>

      {/* Features */}

      <section className="mt-24">

        <h2 className="text-4xl font-bold mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {project.features?.map((feature) => (
            <div
              key={feature}
              className="border rounded-2xl p-5 hover:shadow-md transition"
            >
              ✓ {feature}
            </div>
          ))}

        </div>

      </section>

      {/* Tech Stack */}

      <section className="mt-24">

        <h2 className="text-4xl font-bold mb-8">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-3">

          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 border rounded-full"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* Gallery */}

      <section className="mt-24">

  {/* <h2 className="text-4xl font-bold mb-8">
    Project Gallery
  </h2>

  <ImageCarousel
    screenshots={project.screenshots}
  /> */}

</section>

      {/* Learnings */}

      <section className="mt-24">

        <h2 className="text-4xl font-bold mb-8">
          What I Learned
        </h2>

        <div className="space-y-4">

          {project.learnings?.map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-5"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* Next Project */}

      <section className="mt-24 border-t pt-10">

        <p className="text-gray-500">
          Continue Exploring
        </p>

        <Link
          to={`/projects/${nextProject.slug}`}
          className="inline-block mt-4 text-2xl font-bold hover:underline"
        >
          Next Project → {nextProject.title}
        </Link>

      </section>

    </div>
  );
}

