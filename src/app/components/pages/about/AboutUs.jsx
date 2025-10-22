"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-100px" });
  const overlayControls = useAnimation();

  // Animate when section enters viewport
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
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Wrapper */}
        <div
          className="relative w-[80%] max-w-[600px] rounded-xl overflow-hidden shadow-lg"
          onMouseEnter={handleHover}
        >
          {/* Image */}
          <img
            src="/images/about-1.jpg"
            alt="About Chelan Valley"
            className="rounded-xl object-cover w-full h-full"
          />

          {/* Overlay - Top Right */}
          <motion.div
            animate={overlayControls}
            className="absolute top-0 right-0 w-full h-full bg-white/70 origin-top-right rounded-bl-[20px]"
          />

          {/* Overlay - Bottom Left */}
          <motion.div
            animate={overlayControls}
            className="absolute bottom-0 left-0 w-full h-full bg-white/70 origin-bottom-left rounded-tr-[20px]"
          />
        </div>

        {/* Text */}
        <div className="lg:w-full">
          <h2 className="text-4xl font-bold text-primary mb-6">
            About Chelan Valley <br />Skin Care
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At Chelan Valley Skin Care, we believe radiant skin begins with
            care, science, and balance. Our treatments are designed to renew,
            lift, and brighten — helping your natural beauty shine through.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Combining expert techniques with premium products, we bring you
            personalized skincare that feels luxurious and delivers lasting
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
