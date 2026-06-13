import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        border
        rounded-2xl
        md:rounded-3xl
        overflow-hidden
        bg-white
        shadow-sm
        hover:shadow-xl
        transition
      "
    >

      {/* Content */}

      <div className="p-5 md:p-6">

        <p className="text-xs md:text-sm text-gray-500">
          {project.category}
        </p>

        <h3 className="text-xl md:text-2xl font-bold mt-2 leading-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mt-4 md:mt-6">

          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="
                px-2.5
                md:px-3
                py-1
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

        {/* Button */}

        <div className="mt-5 md:mt-6">

          <Link
            to={`/projects/${project.slug}`}
            className="
              inline-block
              px-4
              md:px-5
              py-2.5
              md:py-3
              border
              rounded-xl
              text-sm
              md:text-base
              hover:bg-black
              hover:text-white
              transition
            "
          >
            View More →
          </Link>

        </div>

      </div>

    </motion.div>
  );
}