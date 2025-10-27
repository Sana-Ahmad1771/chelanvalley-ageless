"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoDotFill } from "react-icons/go";

// ✨ Inside your existing AgelessTreatmentPage component
const InActionSection = ({ treatment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  // Framer Motion Scroll Animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0.7, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="bg-white lg:py-28 pt-20 md:py-16 text-center"
    >
      <div className="flex flex-col justify-center gap-10 items-center max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Heading */}
        <div className="space-y-4 flex flex-col items-center text-center w-full">
          <p className="uppercase flex gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-secondary">
            <span className="text-secondary">
              <GoDotFill size={15} />
            </span>
            In Action
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
            {treatment.name} in Action
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
            Watch how {treatment.name} helps rejuvenate your skin and restore
            natural beauty with visible, lasting results.
          </p>
        </div>

        {/* Video Preview */}
        <div className="w-full mt-6 lg:mt-0 flex justify-center">
          <motion.div
            style={{ scale, opacity }}
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
              <source src={treatment.video} type="video/mp4" />
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
              src={treatment.video}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default InActionSection;
