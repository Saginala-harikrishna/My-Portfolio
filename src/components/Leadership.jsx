import { motion } from "framer-motion";
import leadershipData from "../data/leadershipData";

export default function Leadership() {
  return (
    <section className="py-12 md:py-24">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">

          <h2 className="text-3xl md:text-5xl font-bold">
            Leadership & Community
          </h2>

          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Building communities, supporting students,
            and creating impact beyond academics.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">

          {leadershipData.map((role, index) => (

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

              <p className="text-xs md:text-sm text-gray-500">
                {role.status}
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-2">
                {role.title}
              </h3>

              <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-700 leading-relaxed">
                {role.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 md:mt-6">

                {role.highlights.map((item) => (
                  <span
                    key={item}
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
                    {item}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}