"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function UltherapySection() {
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
              Advanced Treatment
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-snug">
            Ultherapy — Lift Without Surgery
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Discover{" "}
            <span className="font-semibold text-secondary">
              the beauty of sound
            </span>
            . Ultherapy is a non-invasive treatment that lifts and tightens
            the skin using focused ultrasound energy to stimulate collagen.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed  mb-8">
            Experience visible lift and renewed confidence — without downtime,
            without compromise. Perfect for face, neck, and décolletage.
          </p>

          <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-light transition">
            Learn More
          </button>
        </motion.div>

        {/* === RIGHT IMAGE SECTION === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative flex justify-center items-center"
        >
          {/* Pattern Background Block */}
          <div
            className="relative w-[550px] h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
            style={{
              backgroundImage: "url('/images/pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Foreground Main Image (offset on pattern) */}
          <div className="absolute right-[-60px] bottom-[-60px] w-[480px] h-[520px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)] border-[8px] border-white">
            <Image
              src="/images/service-1.jpg"
              alt="Ultherapy Treatment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
