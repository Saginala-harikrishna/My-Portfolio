import { motion } from "framer-motion";

const timeline = [
  {
    title: "School Education",
    description: "99.6% in Secondary Education",
  },
  {
    title: "Diploma in Computer Engineering",
    description: "94.3% Academic Performance",
  },
  {
    title: "Started Building Software",
    description: "Beginning of my development journey",
  },
  {
    title: "Web Development",
    description: "Built practical solutions for students",
  },
  {
    title: "AI & Machine Learning",
    description: "Started creating intelligent systems",
  },
  {
    title: "First Client Project",
    description: "Successfully delivered EduPDF",
  },
  {
    title: "DRDO Internship",
    description: "Worked on offline AI transcription systems",
  },
  {
    title: "Healthcare AI",
    description: "Analyzed patient conversations and insights",
  },
  {
    title: "Leadership & Community",
    description: "Student Ambassador & Placement Representative",
  },
  {
    title: "Building Future Solutions",
    description: "AI • Automation • Real-World Impact",
  },
];

export default function Journey() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            My Journey
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            A journey of learning, building, and solving real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 transform -translate-x-1/2"></div>

          <div className="space-y-10">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                {/* Timeline Circle */}
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full z-10 flex items-center justify-center font-bold text-sm"
                >
                  {index + 1}
                </motion.div>

                {/* Card */}
                <div className="w-[45%] bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}