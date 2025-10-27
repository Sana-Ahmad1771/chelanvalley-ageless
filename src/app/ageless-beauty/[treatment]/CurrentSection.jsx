"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";

const CurrentSection = ({ treatment }) => {
  return (
    <section className="relative w-full bg-neutral py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-16">
        {/* left Content */}
        <div className="flex-1">
          <div className="flex gap-1 items-center mb-3">
            <span className="text-primary">
              <GoDotFill size={15} />
            </span>
            <p className="uppercase text-[0.75rem] md:text-xs tracking-[0.3em] text-primary/90">
              About {treatment.name}
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1635] mb-4 leading-snug">
            Discover the <span className="text-primary">{treatment.name}</span>{" "}
            Experience
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {treatment.longDesc}
          </p>

          {/* Benefits List */}
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {treatment.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 px-2 hover:bg-primary/5 transition-all"
              >
                <p className="text-lg font-medium text-[#0A1635]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right Image with Accent */}
        <div className="flex-1 flex justify-center relative">
          {/* Decorative Accent (behind image) */}
          <div className="absolute bottom-[-1.9rem] left-[-1.9rem] w-56 h-56 bg-secondary rounded-2xl blur-md opacity-50 z-10"></div>

          {/* Treatment Image */}
          <img
            src={treatment.image}
            alt={treatment.name}
            className="rounded-2xl relative z-20 shadow-lg object-cover w-full h-[660px]"
          />
        </div>
      </div>

      {/* Responsive height adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          img {
            height: 520px !important;
          }
        }
        @media (max-width: 768px) {
          img {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CurrentSection;
