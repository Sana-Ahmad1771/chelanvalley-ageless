"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sophie Laurent",
    text: "My skin has never felt so rejuvenated! The facial treatments at Chelan Valley are truly luxurious and deliver visible results.",
  },
  {
    id: 2,
    name: "Emma Grace",
    text: "I’ve tried many skincare brands, but nothing compares to the glow I get after visiting Chelan Valley. Highly recommended!",
  },
  {
    id: 3,
    name: "Olivia Carter",
    text: "The staff is so knowledgeable and caring. Every treatment feels personalized and leaves me relaxed and refreshed.",
  },
];

const UserReviews = () => {
  return (
    <section className="bg-white max-w-[1600px] mx-auto py-20 px-6 lg:px-16 xl:px-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-8 text-primary">
         What Our Clients Say
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="px-6 pb-12" // padding bottom for pagination space
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-neutral mx-3 shadow-lg rounded-2xl py-12 px-10 text-center overflow-hidden relative">
                 {/* Background Image Layer */}
                <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] bg-no-repeat bg-cover bg-center opacity-20"></div>

                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {review.name}
                </h3>
                <p className="text-primary/70 leading-relaxed mb-6">
                  {review.text}
                </p>
                <FaQuoteRight className="text-4xl text-secondary absolute bottom-6 right-6 opacity-60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Inline Pagination Styling */}
      <style jsx global>{`
        /* Move pagination below cards */
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px;
          text-align: center;
        }

        /* Default bullets */
        .swiper-pagination-bullet {
          background-color: #d1d5db; /* gray-300 */
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        /* Active bullet */
        .swiper-pagination-bullet-active {
          background-color: #4b1c6d; /* Tailwind blue-600 (your primary) */
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default UserReviews;
