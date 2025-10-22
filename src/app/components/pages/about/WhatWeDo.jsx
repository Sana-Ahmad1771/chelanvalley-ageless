"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-100px" });
  const overlayControls = useAnimation();

  // Trigger animation when section enters view
  useEffect(() => {
    if (isInView) {
      overlayControls.start({
        scaleX: [0, 1, 0],
        scaleY: [0, 1, 0],
        opacity: [1, 1, 0],
        transition: {
          duration: 1.8,
          ease: [0.25, 1, 0.5, 1],
        },
      });
    }
  }, [isInView, overlayControls]);

  // Replay animation on hover
  const handleHover = () => {
    overlayControls.start({
      scaleX: [0, 1, 0],
      scaleY: [0, 1, 0],
      opacity: [1, 1, 0],
      transition: {
        duration: 1.6,
        ease: [0.25, 1, 0.5, 1],
      },
    });
  };

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* Image Wrapper */}
        <div
          className="relative w-[80%] max-w-[600px] rounded-xl overflow-hidden shadow-lg"
          onMouseEnter={handleHover}
        >
          <img
            src="/images/about-2.jpg"
            alt="What We Do"
            className="rounded-xl object-cover w-full h-full"
          />

          {/* Overlay - Top Left */}
          <motion.div
            animate={overlayControls}
            className="absolute top-0 left-0 w-full h-full bg-white/70 origin-top-left rounded-br-[20px]"
          />

          {/* Overlay - Bottom Right */}
          <motion.div
            animate={overlayControls}
            className="absolute bottom-0 right-0 w-full h-full bg-white/70 origin-bottom-right rounded-tl-[20px]"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-full">
          <h2 className="text-4xl font-bold text-primary mb-8">What We Do</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We specialize in advanced aesthetic skincare — from Ultherapy and
            IPL to Hydrafacial and Microneedling. Each treatment is designed to
            rejuvenate your skin and enhance your natural glow. Our approach
            blends science with artistry, ensuring every treatment is customized
            for visible, long-lasting results.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Chelan Valley Skin Care, we don’t just treat — we care deeply
            about helping your skin feel healthy, balanced, and truly radiant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
