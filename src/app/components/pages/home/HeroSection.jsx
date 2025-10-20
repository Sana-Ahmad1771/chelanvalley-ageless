"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/slide-01.jpg",
    titleLine1: "AGELESS BEAUTY,",
    titleLine2: "NATURALLY",
    desc: "Experience timeless skincare designed to rejuvenate, restore, and reveal your natural radiance.",
    btnText: "Discover Treatments",
    btnLink: "/about",
    align: "left",
  },
  {
    id: 2,
    image: "/images/slide-02.jpg",
    titleLine1: "LUXURY SKINCARE",
    titleLine2: "FOR EVERY AGE",
    desc: "Nourish your skin with premium, science-backed products crafted for true ageless beauty.",
    btnText: "Discover Treatments",
    btnLink: "/about",
    align: "right",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[calc(100vh-120px)] flex items-center overflow-hidden group">
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: activeIndex === index ? 1 : 1.1 }}
                transition={{ duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  slide.align === "left"
                    ? "bg-gradient-to-r from-primary/90 via-primary-light/50 to-transparent"
                    : "bg-gradient-to-l from-primary/90 via-primary-light/50 to-transparent"
                }`}
              ></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex">
                  <div
                    className={`max-w-[680px] ${
                      slide.align === "left"
                        ? "ml-0 mr-auto text-left"
                        : "ml-auto mr-0 text-left"
                    }`}
                  >
                    <motion.h1
                      key={slide.titleLine1}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-neutral text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] uppercase tracking-tight"
                    >
                      {slide.titleLine1}
                      <br />
                      <span className="block text-secondary">
                        {slide.titleLine2}
                      </span>
                    </motion.h1>

                    <motion.p
                      key={slide.desc}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-neutral/90 mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <Link
                        href={slide.btnLink}
                        className="mt-8 inline-block bg-secondary hover:bg-accent text-dark font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300"
                      >
                        {slide.btnText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows (show on hover) */}
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="hidden group-hover:flex absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/70 text-primary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <FaAngleLeft size={22} />
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="hidden group-hover:flex absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/70 text-primary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <FaAngleRight size={22} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
