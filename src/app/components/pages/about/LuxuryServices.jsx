"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

function ImageSlider({ images, scrollDirection, speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({
        x: [0, -distance],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    } else {
      controls.start({
        x: [-distance, 0],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    }
  }, [scrollDirection, distance, controls, speed]);

  const imageList = [...images, ...images]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        ref={containerRef}
        className="flex items-center gap-3"
        style={{ willChange: "transform" }}
        animate={controls}
      >
        {imageList.map((image, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 max-w-full h-[304px] w-[200px] lg:h-[588px] lg:w-[392px] xl:w-[520px] xl:h-[780px] flex items-center justify-center"
          >
            {/* Background Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full rounded-[10px] h-full w-full object-cover object-center"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent rounded-[10px]" />

            {/* Text Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg tracking-wide">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Main Section =================
const LuxuryServices = () => {
  const services = [
    {
      alt: "Ultherapy Treatment",
      title: "Ultherapy Lift",
      src: "/images/service-1.jpg",
    },
    {
      alt: "Hydrafacial",
      title: "Hydrafacial Glow",
      src: "/images/service-2.jpg",
    },
    {
      alt: "Microneedling",
      title: "Microneedling Therapy",
      src: "/images/service-3.jpg",
    },
    {
      alt: "IPL Photofacial",
      title: "IPL Photofacial",
      src: "/images/service-4.jpg",
    },
    {
      alt: "Age-Defying Facial",
      title: "Age-Defying Facial",
      src: "/images/service-5.jpg",
    },
    {
      alt: "Skin Renewal",
      title: "Skin Renewal Treatment",
      src: "/images/service-6.jpg",
    },
    {
      alt: "Rejuvenation Package",
      title: "Rejuvenation Package",
      src: "/images/facial.jpg",
    },
    {
      alt: "Natural Glow",
      title: "Natural Glow Therapy",
      src: "/images/service-4.jpg",
    },
  ];

  const [scrollDirection, setScrollDirection] = useState("down");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);

        if (isVisible) {
          if (currentScrollY > lastScrollY.current) {
            setScrollDirection("down");
          } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection("up");
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative lg:pt-20 pt-12 bg-neutral-light overflow-hidden"
    >
      <div className="pb-10 lg:space-y-20 space-y-12">
        {/* Heading */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 ">
          <div className="flex gap-1">
            <span className="text-secondary">
              {" "}
              <GoDotFill size={15} />
            </span>
            <p className="uppercase flex items-center gap-1 text-[0.75rem] md:text-xs tracking-[0.3em] mb-3 text-secondary">
               Signature Experiences
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Discover Our Luxury Treatments
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-3 md:text-lg max-w-2xl">
            From non-invasive lifts to rejuvenating facials, each treatment is
            crafted to enhance your natural radiance.
          </p>
        </div>

        {/* Image Slider */}
        <div>
          <ImageSlider
            images={services}
            scrollDirection={isInView ? scrollDirection : "down"}
            speed={30}
          />
        </div>
      </div>
    </section>
  );
};

export default LuxuryServices;
