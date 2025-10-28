"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const BodyCareExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });

  // Transform effects
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.8, 0.9, 1, 0.9, 0.8]
  );

  const width = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["85%", "92%", "100%", "92%", "85%"]
  );

  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    typeof window !== "undefined" && window.innerWidth < 768
      ? ["20vh", "30vh", "40vh", "30vh", "20vh"]
      : ["65vh", "75vh", "85vh", "75vh", "65vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 0.95, 0.95, 0.8]
  );

  return (
    <>
      <section ref={containerRef} className="bg-white lg:py-30 pt-20 md:py-16">
        <div className="flex flex-col justify-center gap-10 items-center max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 ">
          {/* Heading */}
          <div className="space-y-4 flex flex-col items-center text-center w-full">
            <p className="uppercase flex gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-secondary">
              <span className="text-secondary">
                <GoDotFill size={15} />
              </span>
              OUR TREATMENTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Experience the Art of <br className="hidden sm:block" />
              Timeless Beauty & Wellness
            </h2>
            <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
              At Chelan Valley Ageless Skin Care, we blend advanced techniques
              with soothing care to help your skin look refreshed, radiant, and
              rejuvenated — the way nature intended.
            </p>
          </div>

          {/* Video Preview */}
          <div className="w-full mt-6 lg:mt-0 flex justify-center">
            <motion.div
              style={{ scale, width, height, opacity }}
              className="relative cursor-pointer group flex items-center justify-center lg:max-h-[85vh] md:max-h-[75vh] max-h-[40vh] overflow-hidden rounded-2xl shadow-lg"
              onClick={openVideo}
            >
              <video
                className="w-full h-full object-cover rounded-xl shadow-lg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src={"https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633360/video-05_vnmmfv.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-14 md:w-20 md:h-16 lg:w-24 lg:h-18 flex items-center justify-center rounded-lg bg-primary text-white shadow-lg hover:bg-secondary transition duration-300">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fullscreen Video Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
            <div className="relative w-[90%] max-w-4xl">
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300"
              >
                ✕
              </button>

              {/* Video Player */}
              <video
                src="https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633360/video-05_vnmmfv.mp4"
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BodyCareExperience;
