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
    <section className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-20">

          <h2 className="text-3xl md:text-5xl font-bold">
            My Journey
          </h2>

          <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A journey of learning, building, and solving real-world problems.
          </p>

        </div>

        {/* Mobile Timeline */}

        <div className="block md:hidden relative">

          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-300" />

          <div className="space-y-6">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
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
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center text-xs font-bold z-10">
                  {index + 1}
                </div>

                <div className="bg-white border rounded-xl p-4 shadow-sm">

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* Desktop Timeline */}

        <div className="hidden md:block relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 transform -translate-x-1/2" />

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
                }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full z-10 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <div className="w-[45%] bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
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