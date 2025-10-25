"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function SpaExperience() {
  return (
    <section className="py-30 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-16">
        {/* === LEFT TEXT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex items-center gap-1 mb-3">
            <span className="text-secondary">
              <GoDotFill size={16} />
            </span>
            <p className="uppercase text-xs tracking-[0.3em] text-secondary font-semibold">
              Our Sanctuary
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-snug">
            The Spa Experience
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed  mb-4">
            Step into serenity at{" "}
            <span className="font-semibold text-secondary">
              Chelan Valley Spa
            </span>
            , where every detail is designed to relax your mind and renew your
            glow.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed ">
            From calming aromas to expert hands, our spa experience blends
            science and tranquility — creating a space where beauty feels
            effortless.
          </p>
        </motion.div>

        {/* === RIGHT IMAGE SECTION === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 relative flex justify-center items-center"
        >
          {/* Pattern Background Block */}
          <div
            className="relative w-[550px] h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
            style={{
              backgroundImage: "url('/images/pattern.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Foreground Main Image (slightly offset on pattern) */}
          <div className="absolute right-[-60px] bottom-[-60px] w-[480px] h-[520px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)] border-[8px] border-white">
            <video
              className="w-full h-full object-cover rounded-2xl"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src={"/video/spa-2.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
