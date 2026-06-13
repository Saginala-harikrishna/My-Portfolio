import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-24">

      <div className="max-w-5xl mx-auto px-4 md:px-6">

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
            duration: 0.7,
          }}
          className="
            border
            rounded-2xl
            md:rounded-3xl
            p-6
            md:p-12
            text-center
            shadow-sm
            hover:shadow-xl
            transition
          "
        >

          {/* Tag */}

          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 text-xs md:text-sm">
            Let's Connect
          </p>

          {/* Heading */}

          <h2 className="text-3xl md:text-5xl font-bold mt-4 md:mt-6 leading-tight">
            Let's Build Something
            <br />
            Meaningful Together
          </h2>

          {/* Description */}

          <p className="mt-5 md:mt-8 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether it's AI, automation, web development,
            content creation, or innovative software solutions,
            I'm always excited to collaborate on impactful projects.
          </p>

          {/* Interest Areas */}

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-10">

            <span className="px-3 py-1.5 border rounded-full text-xs md:text-sm">
              Artificial Intelligence
            </span>

            <span className="px-3 py-1.5 border rounded-full text-xs md:text-sm">
              Automation
            </span>

            <span className="px-3 py-1.5 border rounded-full text-xs md:text-sm">
              Web Development
            </span>

            <span className="px-3 py-1.5 border rounded-full text-xs md:text-sm">
              Machine Learning
            </span>

            <span className="px-3 py-1.5 border rounded-full text-xs md:text-sm">
              Content Creation
            </span>

          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-12">

            <a
              href="mailto:saginalaharikrishna6@gmail.com"
              className="
                w-full
                sm:w-auto
                px-6
                py-3
                bg-black
                text-white
                rounded-xl
                text-sm
                md:text-base
                hover:opacity-90
                transition
              "
            >
              Contact Me
            </a>

            <a
              href="/resume/SaginalaHariKrishnaResume.pdf"
              download
              className="
                w-full
                sm:w-auto
                px-6
                py-3
                border
                rounded-xl
                text-sm
                md:text-base
                font-medium
                hover:bg-gray-100
                transition
              "
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}