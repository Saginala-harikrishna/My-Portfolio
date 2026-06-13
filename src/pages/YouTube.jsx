import { useState } from "react";

import youtubeVideos from "../data/youtubeFullData";
import VideoCard from "../components/youtube/VideoCard";

export default function YouTube() {
  const [selectedVideo, setSelectedVideo] =
    useState(youtubeVideos[2])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Hero */}

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          Content Creation
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Sharing knowledge through AI storytelling,
          educational tutorials, programming content,
          and AI industry updates.
        </p>

      </div>

      {/* Channel Overview */}

      <div className="grid md:grid-cols-4 gap-6 mb-16">

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            AI
          </h3>
          <p className="text-gray-500 mt-2">
            Storytelling
          </p>
        </div>

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            Python
          </h3>
          <p className="text-gray-500 mt-2">
            Tutorials
          </p>
        </div>

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            AI
          </h3>
          <p className="text-gray-500 mt-2">
            News
          </p>
        </div>

        <div className="border rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold">
            C
          </h3>
          <p className="text-gray-500 mt-2">
            Programming
          </p>
        </div>

      </div>

      {/* Featured Video */}

      <section>

        <h2 className="text-3xl font-bold mb-8">
          Featured Video
        </h2>

        <div className="overflow-hidden rounded-3xl border">

          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
            title={selectedVideo.title}
            allowFullScreen
          />

        </div>

        <div className="mt-6">

          <p className="text-gray-500">
            {selectedVideo.category}
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {selectedVideo.title}
          </h3>

        </div>

      </section>

      {/* Popular Videos */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Popular Videos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {youtubeVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={setSelectedVideo}
            />
          ))}

        </div>

      </section>

      {/* Content Categories */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Content Categories
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "AI Storytelling",
            "AI News",
            "Python",
            "C Programming",
            "Educational Shorts",
            "Technology",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 border rounded-full"
            >
              {item}
            </span>
          ))}

        </div>

      </section>

      {/* Channel CTA */}

      <section className="mt-20 text-center">

        <h2 className="text-4xl font-bold">
          Explore My Channel
        </h2>

        <p className="text-gray-600 mt-4">
          Follow my journey in AI, software
          development, and educational content creation.
        </p>

        <a
          href="https://www.youtube.com/@hrtalks96"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-black text-white rounded-2xl hover:opacity-90 transition"
        >
          Visit YouTube Channel
        </a>

      </section>

    </div>
  );
}