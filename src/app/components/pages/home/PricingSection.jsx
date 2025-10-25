"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function PricingSection() {
  const packages = [
    {
      title: "Signature Glow Facial",
      price: "$120",
      duration: "60 min",
      description:
        "A personalized facial designed to brighten, hydrate, and rejuvenate your skin using premium botanical products.",
      features: [
        "Custom facial plan based on skin type",
        "Premium natural ingredients",
        "Instant glow and hydration",
      ],
    },
    {
      title: "Luxury Spa Therapy",
      price: "$180",
      duration: "90 min",
      description:
        "Immerse yourself in full-body relaxation with a blend of aromatherapy, massage, and deep hydration techniques.",
      features: [
        "Aromatherapy and relaxation oils",
        "Full body rejuvenation",
        "Stress relief and deep calm",
      ],
    },
    {
      title: "Body Rejuvenation",
      price: "$150",
      duration: "75 min",
      description:
        "An advanced body renewal treatment that detoxifies, exfoliates, and nourishes for ultimate smoothness and glow.",
      features: [
        "Detox & exfoliation process",
        "Skin nourishing treatment",
        "Hydration and glow finish",
      ],
    },
    {
      title: "Radiance Peel Treatment",
      price: "$200",
      duration: "75 min",
      description:
        "A gentle yet powerful peel that targets uneven tone and texture for visibly radiant, youthful-looking skin.",
      features: [
        "Even tone & smooth texture",
        "Gentle exfoliation process",
        "Youthful radiance restoration",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-neutral/70">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
        {/* ====== Heading ====== */}
        <p className="uppercase flex items-center justify-center gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-primary/90">
          <span className="text-primary">
            <GoDotFill size={15} />
          </span>
          pricing
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
          Our Signature Packages
        </h2>
        <p className="text-dark-3 max-w-2xl mx-auto mb-16 text-sm sm:text-base">
          Experience the art of rejuvenation with our exclusive treatments
          designed to restore balance, beauty, and wellness.
        </p>

        {/* ====== Pricing Cards ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-8"
            >
              {/* Title */}
              <div className="bg-primary/10 text-primary text-xs font-semibold tracking-widest py-2 rounded-full w-fit px-5 mx-auto mb-6 uppercase">
                {pkg.title}
              </div>

              {/* Price */}
              <h3 className="text-4xl font-bold text-secondary mb-1">
                {pkg.price}
                <span className="text-base text-gray-500 font-medium">
                  {" "}
                  /session
                </span>
              </h3>
              <p className="text-gray-500 w-[70px] mx-auto border-b border-dotted border-primary text-sm mb-6">
                {pkg.duration}
              </p>

              {/* Description */}
              <p className="text-dark-3 text-sm mb-6">{pkg.description}</p>

              {/* Features */}
              <div className="bg-neutral/50 rounded-xl p-5 text-left mb-8 border border-gray-100">
                <h4 className="font-semibold text-dark-2 mb-3 text-sm">
                  Includes:
                </h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-dark-3"
                    >
                      <FaCheckCircle className="text-secondary mt-[2px]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="mt-auto bg-primary text-white py-3 rounded-full font-medium hover:bg-secondary transition-all duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
