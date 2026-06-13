import { motion } from "framer-motion";
import experienceData from "../data/experiencePreviewData";
import { Link } from "react-router-dom";

export default function ExperiencePreview() {
  return (
    <section className="py-12 md:py-24">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">

          <h2 className="text-3xl md:text-5xl font-bold">
            Professional Experience
          </h2>

          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Internships and industry experiences that shaped my
            technical growth.
          </p>

        </div>

        {/* Experience Cards */}

        <div className="space-y-5 md:space-y-8">

          {experienceData.map((exp, index) => (

            <motion.div
              key={index}
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
                duration: 0.6,
              }}
              className="
                border
                rounded-2xl
                md:rounded-3xl
                p-5
                md:p-8
                shadow-sm
                hover:shadow-xl
                transition
              "
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-start">

                <div>

                  <h3 className="text-xl md:text-2xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 mt-1">
                    {exp.role}
                  </p>

                </div>

                <div className="mt-3 md:mt-0 md:text-right">

                  <p className="text-sm md:text-base">
                    {exp.location}
                  </p>

                  <p className="text-xs md:text-sm text-gray-500">
                    {exp.duration}
                  </p>

                </div>

              </div>

              <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
                {exp.highlight}
              </p>

              <div className="mt-5 md:mt-6">

                <Link
                  to="/experience"
                  className="
                    inline-block
                    px-4
                    py-2
                    text-sm
                    md:text-base
                    border
                    rounded-xl
                    hover:bg-black
                    hover:text-white
                    transition
                  "
                >
                  View Details
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}