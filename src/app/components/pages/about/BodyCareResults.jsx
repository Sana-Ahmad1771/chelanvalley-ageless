"use client";
import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaFlask, FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa"; // ✅ new refined icon set

export const BodyCareResults = () => {
  const features = [
    {
      icon: <FaFlask className="text-primary text-xl" />,
      title: "Clinically Crafted Formulas",
      desc: "Each treatment is powered by dermatologist-tested, science-backed ingredients to ensure visible, long-lasting results.",
    },
    {
      icon: <FaLeaf className="text-primary text-xl" />,
      title: "Nature-Infused Renewal",
      desc: "Our blends harness the potency of organic botanicals — restoring balance and radiance through pure, natural care.",
    },
    {
      icon: <FaHeart className="text-primary text-xl" />,
      title: "Conscious, Cruelty-Free Beauty",
      desc: "Sustainably sourced, ethically produced — we care for your skin and the planet with the same gentle precision.",
    },
  ];

  return (
    <section className="relative w-full bg-neutral-light py-24 overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-20 z-10">
        {/* Left - Text Content */}
        <div className="flex-1 relative">
          <div className="flex gap-1 items-center mb-3">
            <span className="text-primary">
              <GoDotFill size={15} />
            </span>
            <p className="uppercase text-xs tracking-[0.3em] text-primary font-medium">
              Cosmetic Care Solutions
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1635]  mb-10 leading-snug">
            Experience <span className="text-primary">Refined Body Care</span>
          </h2>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {features.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 py-4 px-2 hover:bg-primary/5 transition-all"
              >
                {/* <div className="p-3 flex items-center justify-center">
                  {s.icon}
                </div> */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0A1635] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="flex-1 relative">
          {/* Main Image */}
          <div className="rounded-2xl w-[840px] h-[570px] overflow-hidden shadow-2xl border border-white/60 relative z-10">
            <Image
              src="/images/therapy.jpg"
              alt="Refined Body Care"
              fill
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Decorative Accent */}
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-secondary rounded-2xl blur-md opacity-50"></div>
        </div>
      </div>
    </section>
  );
};
