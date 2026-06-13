import { motion } from "framer-motion";
import leadershipData from "../data/leadershipData";

export default function Leadership() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Leadership & Community
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Building communities, supporting students, and creating impact beyond academics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

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
              className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500">
                {role.status}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {role.title}
              </h3>

              <p className="mt-5 text-gray-700">
                {role.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {role.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 border rounded-full text-sm"
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