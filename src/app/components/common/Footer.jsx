"use client";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const onClickCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-[#FBF6EE] font-inter border-t border-primary/20 text-[#333] text-[16px] leading-normal"
    >
      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto py-14 px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between flex-wrap gap-12">
        {/* Logo + Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[220px] lg:max-w-[30%]"
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Chelan Valley Skin Care Logo"
              width={180}
              height={60}
              className="mb-6 w-auto h-14"
              priority
            />
          </Link>
          <p className="mb-6 text-[16px] leading-relaxed text-gray-700">
            At Chelan Valley Skin Care, we specialize in rejuvenating treatments
            designed to refresh, restore, and reveal your natural glow. Our
            goal is to help you feel confident in your skin every day.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FiPhone className="text-primary" />
              <span
                onClick={() => onClickCopy("(509) 555-0136")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                (509) 555-0136
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-primary" />
              <span
                onClick={() =>
                  onClickCopy("info@chelanvalleyskincare.com")
                }
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@chelanvalleyskincare.com
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              Chelan, Washington
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="min-w-[200px]"
        >
          <h3 className="text-xl font-semibold mb-5 text-primary">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[16px] text-gray-700">
            <li>
              <Link href="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">Our Services</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary">Before & After</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* Treatments Offered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="min-w-[220px]"
        >
          <h3 className="text-xl font-semibold mb-5 text-primary">
            Popular Treatments
          </h3>
          <ul className="space-y-3 text-[16px] text-gray-700">
            <li>HydraFacial</li>
            <li>Microneedling</li>
            <li>IPL Photofacial</li>
            <li>Ultherapy</li>
            <li>Permanent Makeup</li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[220px] lg:max-w-[25%]"
        >
          <h3 className="text-xl font-semibold mb-5 text-primary">Stay Connected</h3>
          <p className="mb-6 text-[16px] text-gray-700 leading-relaxed">
            Follow us for skincare tips, seasonal specials, and the latest in
            rejuvenation technology.
          </p>
          <div className="flex gap-3">
            {[
              { icon: FaFacebookF, link: "https://facebook.com/chelanskincare" },
              { icon: FaXTwitter, link: "https://x.com/chelanskincare" },
              { icon: AiFillInstagram, link: "https://instagram.com" },
              { icon: IoLogoLinkedin, link: "#" },
            ].map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary/80 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-primary text-white py-6"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between items-center gap-3 text-center">
          <p>
            © {new Date().getFullYear()} Chelan Valley Skin Care. All rights reserved.
          </p>
          <p className="text-sm sm:text-base">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </motion.div>

      {/* Copy Alert */}
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-md shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
