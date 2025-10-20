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
      <button className="py-2 text-body hover:text-primary cursor-pointer flex items-center">
        Explore Treatments <span className="ml-1 transition-transform">▾</span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur */}
            <motion.div
              className="fixed inset-0 top-[130px] bg-white/30 backdrop-blur-md z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Main Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40"
              style={{ top: "130px" }}
            >
              <div className="max-w-[1500px] mx-auto px-6 lg:px-16 xl:px-24 py-14 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h3 className="text-3xl font-bold text-dark-2 mb-2">
                    Discover Ageless Beauty
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore Chelan Valley’s rejuvenation treatments designed to
                    lift, brighten, and refresh your skin — revealing your
                    timeless beauty.
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {menuCategories.map((cat, i) => (
                    <div key={i} className="space-y-5">
                      <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                        <cat.icon className="text-primary text-xl" />
                        <div>
                          <h4 className="font-semibold text-dark-2 text-lg">
                            {cat.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {cat.items.map((item, j) => (
                          <motion.div
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all text-primary">
                              <item.icon className="text-lg" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-semibold text-dark-2 group-hover:text-primary transition-colors">
                                  {item.name}
                                </h5>
                                <FaArrowRight className="text-xs text-gray-400 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
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
