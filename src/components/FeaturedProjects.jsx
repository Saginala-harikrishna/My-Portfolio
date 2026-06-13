import { motion } from "framer-motion";
import featuredProjects from "../data/featuredProjects";
import { Link } from "react-router-dom";
export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            A selection of projects showcasing AI,
            automation, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

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
              className="group overflow-hidden border rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              {/* Image Placeholder
              <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  Project Preview
                </span>
              </div> */}

              {/* Content */}
              <div className="p-8">

                <p className="text-sm text-gray-500">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white transition"
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
        <div className="flex justify-center mt-16">
        
           <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
              >
                View All Projects
              </Link>
        </div>

      </div>
    </section>
  );
}