import { motion } from "framer-motion";
import youtubeData from "../data/youtubeData";

export default function YouTubeSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            YouTube Creator
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Sharing knowledge, stories, and technology with a wider audience.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
        >

          {/* Banner */}
          <div className="h-64 bg-gradient-to-r from-black to-gray-700 flex items-center justify-center">

            <div className="text-center text-white">
              <h3 className="text-4xl font-bold">
                {youtubeData.channelName}
              </h3>

              <p className="mt-3 opacity-90">
                AI Storytelling • Tutorials • Tech Updates
              </p>
            </div>

          </div>

          {/* Content */}
          <div className="p-10">

            <p className="text-gray-700 text-lg">
              {youtubeData.description}
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold">
                  {youtubeData.videos}
                </h4>

                <p className="text-gray-500 mt-2">
                  Videos Created
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold">
                  {youtubeData.subscribers}
                </h4>

                <p className="text-gray-500 mt-2">
                  Community
                </p>
              </div>

            </div>

            {/* Content Types */}
            <div className="flex flex-wrap gap-3 mt-8">

              {youtubeData.contentTypes.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 border rounded-full"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <a
  href="https://www.youtube.com/channel/UCoVAz_43lY7cETLfNPp6T3w"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-black text-white rounded-xl inline-block"
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