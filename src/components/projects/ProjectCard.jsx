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
      className="border rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
    >
      {/* Preview Area
      <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-500">
          Project Preview
        </span>
      </div> */}

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-gray-500">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-600">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6">

  <Link
    to={`/projects/${project.slug}`}
    className="inline-block px-5 py-3 border rounded-xl hover:bg-black hover:text-white transition"
  >
    View More →
  </Link>

</div>

      </div>
    </motion.div>
  );
}