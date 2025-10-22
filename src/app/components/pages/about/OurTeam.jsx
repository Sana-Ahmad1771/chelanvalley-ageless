"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Jade Monroe",
    role: "Founder & CEO",
    img: "/images/team-img-01.jpg",
  },
  {
    name: "Emily Carter",
    role: "Product Development",
    img: "/images/team-img-02.jpg",
  },
  {
    name: "Daniel Smith",
    role: "Skincare Specialist",
    img: "/images/team-img-03.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Creative Director",
    img: "/images/team-img-01.jpg",
  },
  {
    name: "Michael Brown",
    role: "Manager",
    img: "/images/team-img-01.jpg",
  },
  {
    name: "Ava Wilson",
    role: "Designer",
    img: "/images/team-img-01.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto py-20 px-6 lg:px-16 xl:px-24">
        <h2 className="text-4xl font-bold mb-8 text-primary">
          
          Our Team
        </h2>
        <div className="relative">
          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".team-button-next",
              prevEl: ".team-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="team-swiper pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <img src={member.img} alt={member.name} className="w-full" />
                  {/* Overlay only for hovered card */}
                  <div className="absolute inset-0 bg-secondary bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-gray-800 text-sm mb-3">{member.role}</p>
                    <div className="flex gap-3 text-primary text-sm">
                      <a
                        href="#"
                        className="p-2 bg-white/60 rounded-full hover:bg-white/40 transition"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white/60 rounded-full hover:bg-white/40 transition"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white/60 rounded-full hover:bg-white/40 transition"
                      >
                        <FaPinterestP />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white/60 rounded-full hover:bg-white/40 transition"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons Always Visible */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button className="team-button-prev w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition">
              <FaArrowLeftLong />
            </button>
            <button className="team-button-next w-10 h-10 rounded-full border border-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
