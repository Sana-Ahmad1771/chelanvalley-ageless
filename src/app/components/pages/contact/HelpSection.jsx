"use client";
import React from "react";
import { FaHeadset, FaHeart, FaCreditCard, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import contactIcon from "../../../../../public/images/handandphone.png";

const HelpSection = () => {
  return (
    <section className="relative overflow-hidden text-white">
        
      <div className="grid md:grid-cols-4 gap-8 items-start bg-gradient-to-r from-primary/90 to-secondary/90 max-w-[1410px] mx-auto px-6 lg:px-16 xl:px-24 py-16 rounded-2xl relative z-10">
        {/* Background Decorative Overlay */}
        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] w-full bg-no-repeat bg-cover bg-center opacity-10"></div>

        {/* Left Card */}
        <div className="flex flex-col items-start">
          <div className="w-16 h-16 mb-4 ">
            <Image
              src={contactIcon}
              alt="Get in touch icon"
              className="w-full h-full object-contain bg-neutral rounded-full "
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Let us help you
          </h3>
          <button className="flex items-center gap-2 mt-2 font-semibold text-white bg-primary hover:bg-secondary rounded-full px-4 py-2 transition">
            Get In Touch <FaArrowRight />
          </button>
        </div>

        {/* Sales */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-neutral rounded-full flex items-center justify-center">
              <FaHeadset className="text-primary text-lg" />
            </div>
            <h4 className="font-semibold text-primary text-xl">Sales</h4>
          </div>
          <p className="text-md text-white/90">+1 (509) xxx-xxxx</p>
          <p className="text-md text-white/90 mb-3">sales@chelanvalley.com</p>
          <p className="text-md font-semibold">Opening Hours</p>
          <p className="text-md text-white/90">
            Monday to Friday <br /> 9 AM – 8 PM
          </p>
        </div>

        {/* Support */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-neutral rounded-full flex items-center justify-center">
              <FaHeart className="text-primary text-lg" />
            </div>
            <h4 className="font-semibold text-primary text-xl">Support</h4>
          </div>
          <p className="text-md text-white/90">+1 (509) xxx-xxxx</p>
          <p className="text-md text-white/90 mb-3">support@chelanvalley.com</p>
          <p className="text-md font-semibold">Availability</p>
          <p className="text-sm text-white/90">
            Mon – Sat: 9 AM – 9 PM <br />
            Email: Within 24 hrs
          </p>
        </div>

        {/* Payment Support */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-neutral rounded-full flex items-center justify-center">
              <FaCreditCard className="text-primary text-lg" />
            </div>
            <h4 className="font-semibold text-primary text-xl">
              Payment Support
            </h4>
          </div>
          <p className="text-md text-white/90">payments@chelanvalley.com</p>
          <p className="text-md font-semibold mt-3">Opening Hours</p>
          <p className="text-md text-white/90">
            Monday – Friday <br /> 9 AM – 6 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
