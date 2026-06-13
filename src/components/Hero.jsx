import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import introVideo from "../assets/profile/intro-video.mp4";
import portfolioVideo from "../assets/profile/portfolio-video.mp4";

export default function Hero() {
  const videoRef = useRef(null);

  const [currentVideo, setCurrentVideo] =
    useState(introVideo);

  const handleVideoChange = (video) => {
    setCurrentVideo(video);

    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.load();

        videoRef.current
          .play()
          .catch(() => {});
      }
    });
  };

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Computer Science Student
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hari Krishna
            </h1>

            <p className="mt-4 text-lg text-gray-600 font-medium">
              AI Builder • Problem Solver • Content Creator
            </p>

            <h2 className="mt-8 text-2xl lg:text-4xl font-semibold leading-relaxed">
              Turning real-world problems into practical
              AI and software solutions.
            </h2>

            {/* Skills */}

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 rounded-full border">
                AI
              </span>

              <span className="px-4 py-2 rounded-full border">
                Automation
              </span>

              <span className="px-4 py-2 rounded-full border">
                Web Development
              </span>

              <span className="px-4 py-2 rounded-full border">
                Machine Learning
              </span>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
              >
                View My Work
              </Link>

              <a
                href="/resume/SaginalaHariKrishnaResume.pdf"
                download
                className="px-6 py-3 rounded-xl border font-medium hover:bg-gray-100 transition"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* Right Section */}

          <div className="relative">

            {/* Video Player */}

            <div className="overflow-hidden rounded-3xl shadow-2xl border">

              <video
                ref={videoRef}
                controls
                playsInline
                className="w-full"
              >
                <source
                  src={currentVideo}
                  type="video/mp4"
                />
              </video>

            </div>

            {/* Video Selector */}

            <div className="grid grid-cols-2 gap-3 mt-4">

              <button
                onClick={() =>
                  handleVideoChange(introVideo)
                }
                className={`p-4 rounded-xl border text-left transition ${
                  currentVideo === introVideo
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <p className="font-semibold">
                 Welcome Video
                </p>

             
              </button>

              <button
                onClick={() =>
                  handleVideoChange(portfolioVideo)
                }
                className={`p-4 rounded-xl border text-left transition ${
                  currentVideo === portfolioVideo
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <p className="font-semibold">
                 Introduction
                </p>

             
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}