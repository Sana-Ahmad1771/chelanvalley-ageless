"use client";
import React, { useState, useEffect } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    helpType: "",
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

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
    if (!formData.helpType) newErrors.helpType = "Please select an option.";
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", helpType: "" });
      setShowToast(true);
    }, 700);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-25 right-5 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg animate-slide-in">
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

        /* Styling for <select> */
        select {
          color: #374151; /* gray-700 */
          font-size: 1rem;
          background-color: #fff;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25rem;
          cursor: pointer;
        }

        select:focus {
          outline: none;
        }

        option {
          color: #374151; /* same as text-gray-700 */
          background: #ffffff;
        }

        option:hover {
          background: #f9fafb; /* light hover effect */
        }

        option[value=""] {
          color: #9ca3af; /* placeholder gray */
        }
      `}</style>

      {/* Form and Map Grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Form */}
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
              {/* Name */}
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
                  } rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
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
                  } rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Help Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What kind of help do you need?
                </label>
                <select
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.helpType ? "border-red-500" : "border-gray-300"
                  } rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <option value="">Select an option</option>
                  <option value="support">
                    I would like to talk with Customer Support
                  </option>
                  <option value="newCustomer">
                    I am not a Chelan Valley Ageless Skincare customer and would
                    like to talk with Sales
                  </option>
                  <option value="existingCustomer">
                    I am a Chelan Valley Ageless Skincare customer and would
                    like to talk with Sales
                  </option>
                </select>
                {errors.helpType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.helpType}
                  </p>
                )}
                {formData.helpType === "support" && (
                  <div className="mt-3 bg-blue-50 text-blue-800 text-sm p-4 rounded-lg border border-blue-200">
                    <p>
                      Good news! We upgraded our support center — now offering
                      self-service troubleshooting and direct access to our
                      support experts.{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        Click here
                      </a>{" "}
                      to explore these options today!
                    </p>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
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
                  } rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
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

          {/* Right Map */}
          <div className="order-1 lg:order-2 h-[200px] sm:h-[400px] md:h-[500px] lg:h-full flex items-stretch">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Chelan Valley Skin Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.0655334812564!2d-119.98949102319753!3d47.838323771946705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549b9b1ac4154b45%3A0xcd0306e0a539ece6!2sAgeless%20Beauty%20Aesthetics!5e0!3m2!1sen!2s!4v1761048371278!5m2!1sen!2s"
                allowFullScreen=""
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
