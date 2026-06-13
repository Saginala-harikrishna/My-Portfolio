import { motion } from "framer-motion";
import experienceData from "../data/experiencePreviewData";
import { useRef } from "react";

import { Link } from "react-router-dom";

export default function ExperiencePreview() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Professional Experience
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Internships and industry experiences that shaped my technical growth.
          </p>
        </div>

        <div className="space-y-8">

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
              className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {exp.role}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 text-right">
                  <p>{exp.location}</p>
                  <p className="text-gray-500">
                    {exp.duration}
                  </p>
                </div>

              </div>

              <p className="mt-6 text-gray-700">
                {exp.highlight}
              </p>

              
             
<div className="mt-6">
  <Link
    to="/experience"
    className="inline-block px-4 py-2 border rounded-xl hover:bg-black hover:text-white transition"
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