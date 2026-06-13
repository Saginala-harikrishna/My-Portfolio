import { motion } from "framer-motion";
import youtubeData from "../data/youtubeData";

export default function YouTubeSection() {
  return (
    <section className="py-12 md:py-24">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">

          <h2 className="text-3xl md:text-5xl font-bold">
            YouTube Creator
          </h2>

          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge, stories, and technology with a wider audience.
          </p>

        </div>

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
            duration: 0.6,
          }}
          className="
            border
            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            transition
          "
        >

          {/* Banner */}

          <div className="h-40 md:h-64 bg-gradient-to-r from-black to-gray-700 flex items-center justify-center">

            <div className="text-center text-white px-4">

              <h3 className="text-2xl md:text-4xl font-bold">
                {youtubeData.channelName}
              </h3>

              <p className="mt-2 md:mt-3 text-sm md:text-base opacity-90">
                AI Storytelling • Tutorials • Tech Updates
              </p>

            </div>

          </div>

          {/* Content */}

          <div className="p-5 md:p-10">

            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              {youtubeData.description}
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">

              <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

                <h4 className="text-2xl md:text-3xl font-bold">
                  {youtubeData.videos}
                </h4>

                <p className="text-xs md:text-base text-gray-500 mt-1 md:mt-2">
                  Videos Created
                </p>

              </div>

              <div className="border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">

                <h4 className="text-2xl md:text-3xl font-bold">
                  {youtubeData.subscribers}
                </h4>

                <p className="text-xs md:text-base text-gray-500 mt-1 md:mt-2">
                  Community
                </p>

              </div>

            </div>

            {/* Content Types */}

            <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">

              {youtubeData.contentTypes.map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    md:px-4
                    py-1.5
                    md:py-2
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

            {/* Button */}

            <div className="mt-6 md:mt-8">

              <a
                href="https://www.youtube.com/channel/UCoVAz_43lY7cETLfNPp6T3w"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  w-full
                  sm:w-auto
                  px-5
                  md:px-6
                  py-3
                  bg-black
                  text-white
                  rounded-xl
                  text-sm
                  md:text-base
                  text-center
                  hover:opacity-90
                  transition
                "
              >
                Visit Channel
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}