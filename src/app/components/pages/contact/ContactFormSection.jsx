"use client";
import React, { useState, useEffect } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate sending message
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setShowToast(true);
    }, 700);
  };

  // Hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white">
      {/* ===== Toast Notification ===== */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg animate-slide-in">
          <p className="font-medium">Thank you for contacting us!</p>
          <p className="text-sm opacity-90">We’ll get back to you soon.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>

      {/* ===== Form and Map Grid ===== */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* ===== Left Form Section ===== */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Contact Chelan Valley
            </h2>

            <p className="text-gray-600 mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
              At Chelan Valley Skin Care, we value connection and personalized
              care. Whether you have questions about our treatments, products,
              or wish to schedule a consultation, we’re here to assist you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex-grow">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full px-4 py-3 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-full`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-fit cursor-pointer bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* ===== Right Map Section ===== */}
          <div className="order-1 lg:order-2 h-[200px] sm:h-[400px] md:h-[500px] lg:h-full flex items-stretch">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Chelan Valley Skin Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.0655334812564!2d-119.98949102319753!3d47.838323771946705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549b9b1ac4154b45%3A0xcd0306e0a539ece6!2sAgeless%20Beauty%20Aesthetics!5e0!3m2!1sen!2s!4v1761048371278!5m2!1sen!2s"
                allowfullscreen=""
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
