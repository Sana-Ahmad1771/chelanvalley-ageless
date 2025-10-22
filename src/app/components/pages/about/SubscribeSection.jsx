"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white overflow-hidden py-20">
      {/* Decorative Background Texture */}
      <div className="absolute inset-0 bg-[url('/patterns/bg-texture.png')] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Left Text */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <FaEnvelope size={32} className="text-white" />
            <h2 className="text-3xl font-semibold tracking-wide">
              Subscribe to Get 10% Off
            </h2>
          </div>
          <p className="text-white/80 leading-relaxed ">
            Get the latest deals and offers right to your inbox.
          </p>
        </div>

        {/* Right Form (Styled like search bar) */}
        <form
          onSubmit={handleSubmit}
          className="relative flex w-full md:w-auto overflow-hidden border border-white/30 rounded-full shadow-inner transition-all duration-300 hover:border-white/50 focus-within:border-white/70 backdrop-blur-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full md:w-96 px-5 py-3 text-sm bg-transparent text-white placeholder-white/60 outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 font-semibold bg-white text-primary rounded-r-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            SUBSCRIBE
          </button>
        </form>
      </motion.div>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg text-sm z-20"
          >
            Thank you for subscribing!
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full shadow-lg text-sm z-20"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SubscribeSection;
