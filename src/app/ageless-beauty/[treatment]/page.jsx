import React from "react";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Link from "next/link";
import CurrentSection from "./CurrentSection";
import InActionSection from "./InActionSection";

// ✅ Ageless Beauty Treatments
const agelessBeautyTreatments = [
  {
    slug: "ultherapy",
    name: "Ultherapy",
    desc: "The non-invasive lift for the neck, chin, and brow — see the beauty of sound.",
    longDesc:
      "Ultherapy is a non-surgical treatment that uses ultrasound energy to lift and tighten the skin naturally. It stimulates your body’s collagen production, improving skin elasticity and reducing sagging over time. The results develop gradually, offering a refreshed, youthful look without downtime.",
    benefits: [
      "Non-surgical skin tightening",
      "No downtime or recovery period",
      "Natural collagen stimulation",
      "Visible lift and firming results",
    ],
    image: "/images/service-4.jpg",
    gallery: [
      "/images/about-22.jpg",
      "/images/about-us-3.jpg",
      "/images/about-us-5.jpg",
    ],
    video: "https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633333/video-big_wesbfc.mp4",
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    desc: "Stimulate collagen and achieve smoother, younger-looking skin.",
    longDesc:
      "Microneedling uses ultra-fine needles to gently puncture the skin, triggering your body’s natural healing response. This promotes new collagen and elastin production, helping reduce fine lines, acne scars, and uneven texture. It’s a powerful treatment to renew your skin’s youthful glow.",
    benefits: [
      "Improves skin texture and tone",
      "Reduces scars and pigmentation",
      "Stimulates collagen & elastin",
      "Minimal downtime",
    ],
    image: "/images/microneedling.jpg",
    gallery: [
      "/images/about-us-5.jpg",
      "/images/about-us-3.jpg",
      "/images/about-22.jpg",
    ],
    video: "https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633326/microneedling_uhms4r.mp4",
  },
  {
    slug: "ipl-therapy",
    name: "IPL Therapy",
    desc: "Target discoloration and sun damage for a clear, even skin tone.",
    longDesc:
      "IPL (Intense Pulsed Light) therapy targets pigmentation, redness, and sun damage using controlled light energy. It breaks down dark spots and evens out skin tone while boosting collagen. The result? Brighter, clearer, and rejuvenated skin.",
    benefits: [
      "Fades dark spots and pigmentation",
      "Reduces redness and broken capillaries",
      "Improves overall skin tone",
      "Non-invasive and quick",
    ],
    image: "/images/about-us-2.jpg",
    gallery: [
      "/images/about-us-3.jpg",
      "/images/about-22.jpg",
      "/images/about-us-5.jpg",
    ],
    video: "https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633341/ipl-therapy_qcjp62.mp4",
  },
];

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const treatment = agelessBeautyTreatments.find(
    (t) => t.slug === params.treatment
  );

  return {
    title: treatment
      ? `${treatment.name} | Ageless Beauty - Chelan Valley`
      : "Ageless Beauty | Chelan Valley",
    description:
      treatment?.desc ||
      "Experience aesthetic treatments that enhance your natural beauty.",
  };
}

// ✅ Main Component
export default function AgelessTreatmentPage({ params }) {
  const treatment = agelessBeautyTreatments.find(
    (t) => t.slug === params.treatment
  );

  if (!treatment) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Treatment Not Found
        </h1>
        <p className="text-dark/60">Please check the URL.</p>
      </section>
    );
  }

  const otherTreatments = agelessBeautyTreatments.filter(
    (t) => t.slug !== params.treatment
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-neutral text-center py-20 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-4">{treatment.name}</h1>
          <p className="text-lg text-neutral-light">{treatment.desc}</p>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.jpg')] bg-cover"></div>
      </section>

      {/* About Treatment */}
      <CurrentSection treatment={treatment} />

      {/* Video / Gallery */}
      <InActionSection treatment={treatment} />

      {/* Explore Other Treatments */}
      <section className="py-20 bg-[#FBF6EE] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.jpg')] bg-cover"></div>
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
          <h3 className="text-2xl font-bold text-primary mb-8">
            Explore Other Ageless Beauty Treatments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherTreatments.map((item) => (
              <Link
                key={item.slug}
                href={`/ageless-beauty/${item.slug}`}
                className="block bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg mb-4 h-[200px] w-full object-cover"
                />
                <h4 className="font-bold text-lg text-dark mb-2">
                  {item.name}
                </h4>
                <p className="text-sm text-dark/70">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
