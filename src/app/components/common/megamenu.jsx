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
      tagColor: "bg-primary text-light",
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
      tagColor: "bg-secondary text-light",
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
      tagColor: "bg-secondary/40 text-dark",
      icon: FaHandshake,
      description: "Relax, rejuvenate, and rediscover confidence in your skin.",
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
      <button className="py-1 text-body hover:text-primary-light cursor-pointer flex items-center font-medium">
        Explore Treatments <span className="ml-1 transition-transform">▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 top-[80px] bg-black/30 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Mega Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-[#F8F6F0] shadow-2xl border-t border-[#e4e0d4] z-50 overflow-hidden"
              style={{ top: "80px" }}
            >
              {/* 🌸 Top-right decorative pattern with gradient fade */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-0 right-0 w-[700px] h-[700px] bg-[url('/images/pattern-megamenu.jpg')] bg-no-repeat bg-cover bg-right-top opacity-30"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 80%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 80%)",
                  }}
                ></div>
              </div>

              <div
                className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-12 overflow-y-auto max-h-[85vh]"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* Header */}
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Discover Ageless Beauty
                  </h3>
                  <p className="text-dark/70 max-w-2xl leading-relaxed">
                    Explore rejuvenation treatments designed to lift, brighten,
                    and refresh your skin — revealing your timeless glow.
                  </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                  {menuCategories.map((cat, i) => (
                    <div key={i} className="relative z-50 py-6">
                      {/* Section Tag */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 max-w-[300px] w-full py-4 rounded-xl font-semibold text-xl mb-4 ${cat.tagColor}`}
                      >
                        <cat.icon className="text-base" />
                        {cat.title}
                      </div>

                      <p className="text-sm text-dark/70 mb-5 leading-relaxed">
                        {cat.description}
                      </p>

                      <ul className="space-y-4">
                        {cat.items.map((item, j) => (
                          <motion.li
                            key={j}
                            whileHover={{ x: 5 }}
                            className="flex justify-between items-start border-b border-gray-300/70 pb-3 group cursor-pointer"
                          >
                            <div>
                              <h5 className="font-semibold text-dark group-hover:text-primary text-sm md:text-base transition-colors">
                                {item.name}
                              </h5>
                              <p className="text-xs text-dark/60 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                            <item.icon className="text-secondary opacity-70 group-hover:opacity-100 transition-opacity text-lg mt-1" />
                          </motion.li>
                        ))}
                      </ul>
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
