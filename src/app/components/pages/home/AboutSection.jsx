"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function AboutSection() {
  const [sectionHeight, setSectionHeight] = useState(0);
  const rightRef = useRef(null);

  // Dynamically adjust image height to match the right column
  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) {
        setSectionHeight(rightRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 relative z-10 grid lg:grid-cols-2 gap-16 items-stretch">
        {/* LEFT COLUMN - Title + Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-8"
          style={{ height: sectionHeight ? `${sectionHeight}px` : "auto" }}
        >
          <div>
            <p className="uppercase flex items-center gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-primary/90">
              <span className="text-primary">
                <GoDotFill size={15} />
              </span>
                About Us
            </p>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Radiance Begins at Chelan Valley
            </h2>
          </div>

          {/* Image (auto height match) */}
          <div className="relative w-full flex-1 rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/about-us-8.jpg"
              alt="Chelan Valley Skin Care"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Image + Paragraph */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Image */}
          <div className="relative w-full h-[480px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/about-us-5.jpg"
              alt="Chelan Valley Spa"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-primary">Chelan Valley</span>
            , we blend advanced skincare technology with a serene spa
            experience. Our mission is to help you rediscover your natural
            radiance through personalized treatments designed to nourish,
            rejuvenate, and enhance your confidence.
          </p>

          {/* Button */}
          <motion.a
            href="/services"
            className="inline-block w-fit bg-secondary hover:bg-accent text-dark font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Explore Our Treatments
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
