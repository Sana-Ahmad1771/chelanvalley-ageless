"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: 1,
    title: "Advanced Facial Treatments",
    description:
      "Revitalize your skin with science-backed facial therapies designed to cleanse, hydrate, and renew.",
    img: "/images/service-01.jpg",
  },
    {
    id: 2,
    title: "Hydration Therapy",
    description:
      "Deep moisture infusion that restores skin elasticity, boosts glow, and prevents premature aging.",
    img: "/images/service-02.jpg",
  },
  {
    id: 3,
    title: "Rejuvenation Packages",
    description:
      "Comprehensive care experiences that blend relaxation with targeted skin rejuvenation results.",
    img: "/images/service-03.jpg",
  },
  {
    id: 4,
    title: "Natural Glow Enhancement",
    description:
      "Organic treatments using botanically enriched formulas to achieve a healthy, lasting radiance.",
    img: "/images/service-04.jpg",
  },
  {
    id: 5,
    title: "Skin Renewal Therapy",
    description:
      "A deeply restorative treatment that refines texture and restores youthful luminosity.",
    img: "/images/slide-02.jpg",
  },
  {
    id: 6,
    title: "Age-Defying Facial",
    description:
      "Combines advanced technology with precision care to smooth fine lines and firm skin.",
    img: "/images/slide-01.jpg",
  },
];

export default function ServicesSection() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-neutral py-20 px-6 lg:px-24 text-center relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <p className="uppercase flex items-center justify-center gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-primary/90">
          <span className="text-primary">
            <GoDotFill size={15} />
          </span>
          premire skin care services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary mb-12">
          Explore Our Signature Treatments
        </h2>

        {/* Swiper Carousel */}
        <div
          className="relative"
          onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".service-next",
              prevEl: ".service-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
              1280: { slidesPerView: 4, slidesPerGroup: 2 },
            }}
            className="!overflow-hidden"
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                {/* 👇 group only inside each card */}
                <div className="flex flex-col items-center cursor-pointer group">
                  <div className="w-full h-[490px] relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center px-6 text-center">
                      <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary-light">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-dark text-lg leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="service-prev absolute top-1/2 -left-8 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-light hover:shadow-2xl transition-all duration-300 z-10">
            <FaChevronLeft size={18} />
          </button>
          <button className="service-next absolute top-1/2 -right-8 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-light hover:shadow-2xl transition-all duration-300 z-10">
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
