"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaFlask,
  FaLaptopMedical,
  FaCogs,
  FaChartLine,
  FaMicroscope,
  FaGlobe,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("backdrop-active");
    else document.body.classList.remove("backdrop-active");
    return () => document.body.classList.remove("backdrop-active");
  }, [open]);

  const menuCategories = [
    {
      title: "Ageless Beauty",
      icon: FaHeartbeat,
      description:
        "Experience aesthetic treatments that enhance your natural beauty.",
      items: [
        {
          name: "Ultherapy",
          desc: "The non-invasive lift for the neck, chin, and brow — see the beauty of sound.",
          icon: FaChartLine,
        },
        {
          name: "Microneedling",
          desc: "Stimulate collagen and achieve smoother, younger-looking skin.",
          icon: FaFlask,
        },
        {
          name: "IPL Therapy",
          desc: "Target discoloration and sun damage for a clear, even skin tone.",
          icon: FaLaptopMedical,
        },
      ],
    },
    {
      title: "Skin Rejuvenation",
      icon: FaFlask,
      description:
        "Refresh and renew your skin with professional aesthetic care.",
      items: [
        {
          name: "Hydrafacial",
          desc: "Deeply cleanse, extract, and hydrate — glow instantly.",
          icon: FaMicroscope,
        },
        {
          name: "Microdermabrasion",
          desc: "Exfoliate dead skin cells for a smoother, more radiant complexion.",
          icon: FaCogs,
        },
        {
          name: "Waxing & Permanent Makeup",
          desc: "Define your features and enjoy long-lasting smoothness.",
          icon: FaGlobe,
        },
      ],
    },
    {
      title: "Chelan Valley Spa",
      icon: FaHandshake,
      description:
        "Relax, rejuvenate, and rediscover confidence in your skin.",
      items: [
        {
          name: "Our Philosophy",
          desc: "Our goal is to enhance your natural beauty through advanced skincare.",
          icon: FaHeartbeat,
        },
        {
          name: "Dermalogica Products",
          desc: "We use all Dermalogica skincare — grease-free and cruelty-free.",
          icon: FaFlask,
        },
        {
          name: "Meet Nelly",
          desc: "Your rejuvenation specialist dedicated to personalized care.",
          icon: FaLaptopMedical,
        },
      ],
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="py-2 text-body hover:text-primary cursor-pointer flex items-center font-medium">
        Explore Treatments <span className="ml-1 transition-transform">▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Dim overlay */}
            <motion.div
              className="fixed inset-0 top-[80px] bg-black/20 backdrop-blur-md z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Mega menu dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/90 shadow-2xl border-t border-white/10 z-50"
              style={{ top: "80px" }}
            >
              {/* Scrollable container (hidden scrollbar) */}
              <div
                className="max-w-[1500px] mx-auto px-6 lg:px-16 xl:px-24 py-10 overflow-y-auto max-h-[85vh]"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Hide scrollbar for WebKit */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-sm">
                    Discover Ageless Beauty
                  </h3>
                  <p className="text-white/90 max-w-2xl leading-relaxed text-sm md:text-base">
                    Explore rejuvenation treatments designed to lift, brighten,
                    and refresh your skin — revealing your timeless glow.
                  </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                  {menuCategories.map((cat, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex items-center gap-3 pb-2 border-b border-white/20">
                        <cat.icon className="text-secondary text-lg md:text-xl drop-shadow" />
                        <div>
                          <h4 className="font-semibold text-white text-base md:text-lg">
                            {cat.title}
                          </h4>
                          <p className="text-xs md:text-sm text-white/80 leading-snug">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {cat.items.map((item, j) => (
                          <motion.div
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                            whileHover={{ y: -2 }}
                          >
                            <div className="p-2 rounded-lg bg-white/20 group-hover:bg-secondary transition-all text-white group-hover:text-white shrink-0">
                              <item.icon className="text-sm md:text-base" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-semibold text-white text-sm md:text-base group-hover:text-secondary transition-colors">
                                  {item.name}
                                </h5>
                                <FaArrowRight className="text-[10px] text-white/80 group-hover:text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                              </div>
                              <p className="text-xs md:text-sm text-white/80 group-hover:text-neutral mt-1 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;
