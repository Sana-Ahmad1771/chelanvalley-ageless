"use client";
import React from "react";
import {
  FaSpa,
  FaLeaf,
  FaHandsHelping,
  FaWater,
  FaCrown,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export const TherapieSection = () => {
  const services = [
    { icon: <FaCrown />, title: "Advanced Aesthetic Therapies" },
    { icon: <FaSpa />, title: "Relaxation & Renewal Rituals" },
    { icon: <FaHandsHelping />, title: "Personalized Skin Programs" },
    { icon: <FaWater />, title: "Hydration & Glow Treatments" },
    { icon: <FaLeaf />, title: "Holistic Wellness & Body Balance" },
  ];

  return (
    <section className="relative w-full bg-neutral-light py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Video */}
        <div className="flex-1 flex justify-center">
          <video
            src="/video/video-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl relative z-20 shadow-lg object-cover w-full h-[660px]"
          />
          {/* Decorative Accent */}
          <div className="absolute z-10 bottom-10 left-50 w-56 h-56 bg-secondary rounded-2xl blur-md opacity-50"></div>
      
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <div className="flex gap-1">
            <span className="text-primary">
              {" "}
              <GoDotFill size={15} />
            </span>
            <p className="uppercase flex items-center gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-primary/90">
              Signature Therapies
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1635] mb-4 leading-snug">
            Where <span className="text-primary">Science Meets Serenity</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed  mb-8">
            At Chelan Valley, every therapy is designed to restore balance —
            blending the precision of modern aesthetics with the calm of mindful
            self-care. Our approach focuses on enhancing your natural radiance
            through personalized, gentle, and effective treatments.
          </p>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 px-2 hover:bg-primary/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary text-2xl">{s.icon}</div>
                  <p className="text-lg font-medium text-[#0A1635]">
                    {s.title}
                  </p>
                </div>
              </div>
            ))}
            
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};
