import { motion } from "framer-motion";
import featuredProjects from "../data/featuredProjects";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <section className="py-12 md:py-24">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">

          <h2 className="text-3xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A selection of projects showcasing AI,
            automation, and software development.
          </p>

        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">

          {featuredProjects.map((project, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                group
                overflow-hidden
                border
                rounded-2xl
                md:rounded-3xl
                bg-white
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* Content */}

              <div className="p-5 md:p-8">

                <p className="text-xs md:text-sm text-gray-500">
                  {project.category}
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">

                  {project.technologies.map((tech) => (
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
                        hover:bg-black
                        hover:text-white
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View All Projects */}

        <div className="flex justify-center mt-10 md:mt-16">

          <Link
            to="/projects"
            className="
              px-5
              md:px-6
              py-3
              rounded-xl
              bg-black
              text-white
              font-medium
              text-sm
              md:text-base
              hover:opacity-90
              transition
            "
          >
            View All Projects
          </Link>

        </div>

      </div>

    </section>
  );
}