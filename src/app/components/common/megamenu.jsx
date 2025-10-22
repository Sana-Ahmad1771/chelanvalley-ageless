"use client";
import React, { useState } from "react";
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

const MegaMenu = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

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
      onMouseEnter={() => {
        setOpen(true);
        setIsMegaMenuOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsMegaMenuOpen(false);
      }}
    >
      {/* Trigger Button */}
      <button className="py-2 text-body hover:text-primary cursor-pointer flex items-center font-medium">
        Explore Treatments <span className="ml-1 transition-transform">▾</span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur Overlay - Fixed positioning */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ top: '80px' }} // Match your header height
            />

            {/* Main Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/90 shadow-2xl border-t border-white/10 z-50"
              style={{ top: "80px" }}
            >
              <div className="max-w-[1500px] mx-auto px-6 lg:px-16 xl:px-24 py-14 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                    Discover Ageless Beauty
                  </h3>
                  <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Explore rejuvenation treatments designed to lift, brighten,
                    and refresh your skin — revealing your timeless glow.
                  </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {menuCategories.map((cat, i) => (
                    <div key={i} className="space-y-5">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 pb-2 border-b border-white/20">
                        <cat.icon className="text-secondary text-xl drop-shadow" />
                        <div>
                          <h4 className="font-semibold text-white text-lg">
                            {cat.title}
                          </h4>
                          <p className="text-sm text-white/80">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      {/* Category Items */}
                      <div className="space-y-4">
                        {cat.items.map((item, j) => (
                          <motion.div
                            key={j}
                            className="flex items-start gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 group cursor-pointer shadow-sm"
                            whileHover={{ y: -2 }}
                          >
                            <div className="p-2 rounded-lg bg-white/20 group-hover:bg-secondary transition-all text-white group-hover:text-white">
                              <item.icon className="text-lg" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-semibold text-white group-hover:text-secondary transition-colors">
                                  {item.name}
                                </h5>
                                <FaArrowRight className="text-xs text-white/80 group-hover:text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                              </div>
                              <p className="text-sm text-white/80 group-hover:text-neutral mt-1 transition-colors">
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