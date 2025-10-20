"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaRegHeart, FaSpa } from "react-icons/fa";

export default function HeadlineBanner() {
  const messages = [
    "Welcome to Chelan Valley Skin Care — Where Beauty Meets Science",
    "Revitalize • Rejuvenate • Radiate",
    "Trusted Skin Experts in Chelan Valley",
    "Welcome to Chelan Valley Skin Care — Where Beauty Meets Science",
    "Revitalize • Rejuvenate • Radiate",
    "Trusted Skin Experts in Chelan Valley",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#FBF6EE] border-b border-[#d5c5a1]/30 py-3">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap text-[#3b2f2f] text-sm md:text-base font-medium tracking-wide"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-5">
            {messages.map((msg, index) => (
              <div key={index} className="flex items-center gap-3">
                {index === 0 && <FaLeaf className="text-[#7A6C5D]" />}
                {index === 1 && <FaSpa className="text-[#7A6C5D]" />}
                {index === 2 && <FaRegHeart className="text-[#7A6C5D]" />}
                {index === 3 && <FaLeaf className="text-[#7A6C5D]" />}
                {index === 4 && <FaSpa className="text-[#7A6C5D]" />}
                {index === 5 && <FaRegHeart className="text-[#7A6C5D]" />}
                <span>{msg}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
