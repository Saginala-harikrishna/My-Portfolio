import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border rounded-3xl p-12 text-center shadow-sm hover:shadow-xl transition"
        >

          <p className="uppercase tracking-[0.3em] text-gray-500 text-sm">
            Let's Connect
          </p>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Let's Build Something
            <br />
            Meaningful Together
          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            Whether it's AI, automation, web development,
            content creation, or innovative software solutions,
            I'm always excited to collaborate on impactful projects.
          </p>

          {/* Interest Areas */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">

            <span className="px-4 py-2 border rounded-full">
              Artificial Intelligence
            </span>

            <span className="px-4 py-2 border rounded-full">
              Automation
            </span>

            <span className="px-4 py-2 border rounded-full">
              Web Development
            </span>

            <span className="px-4 py-2 border rounded-full">
              Machine Learning
            </span>

            <span className="px-4 py-2 border rounded-full">
              Content Creation
            </span>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">

            <a
  href="mailto:saginalaharikrishna6@gmail.com"
  className="px-8 py-4 bg-black text-white rounded-2xl hover:opacity-90 transition inline-block"
>
  Contact Me
</a>

             <a
                href="/resume/SaginalaHariKrishnaResume.pdf"
                download
                className="px-6 py-3 rounded-xl border font-medium hover:bg-gray-100 transition"
              >
                Download Resume
              </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}