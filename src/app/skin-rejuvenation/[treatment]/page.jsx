import React from "react";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CurrentSection from "@/app/ageless-beauty/[treatment]/CurrentSection";
import InActionSection from "@/app/ageless-beauty/[treatment]/InActionSection";

// ✅ Skin Rejuvenation Treatments (From Mega Menu)
const rejuvenationTreatments = [
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    desc: "Deeply cleanse, extract, and hydrate — glow instantly.",
    longDesc:
      "HydraFacial is a gentle yet powerful treatment that combines cleansing, exfoliation, extraction, and hydration. It removes impurities and infuses essential nutrients, leaving your skin refreshed, radiant, and glowing.",
    benefits: [
      "Deeply cleanses pores",
      "Hydrates and nourishes skin",
      "Improves tone and texture",
      "Instantly visible glow",
    ],
    image: "/images/about-us-5.jpg",
    video: "/video/video-03.mp4",
  },
  {
    slug: "microdermabrasion",
    name: "Microdermabrasion",
    desc: "Exfoliate dead skin cells for a smoother, more radiant complexion.",
    longDesc:
      "Microdermabrasion gently removes the outer layer of dead skin cells using advanced exfoliation technology. It reduces dullness, minimizes fine lines, and enhances the skin’s natural renewal process for a luminous finish.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Evens out skin tone",
      "Removes dull, dead skin cells",
      "Promotes new cell growth",
    ],
    image: "/images/microdermabrasion.jpg",
    video: "/video/microdermabrasion-2.mp4",
  },
  {
    slug: "waxing-permanent-makeup",
    name: "Waxing & Permanent Makeup",
    desc: "Define your features and enjoy long-lasting smoothness.",
    longDesc:
      "Our professional waxing services ensure smooth, flawless skin with gentle care. Permanent makeup enhances your natural beauty, giving you perfectly defined brows and lips that last — saving you time and boosting confidence.",
    benefits: [
      "Smooth, hair-free skin",
      "Long-lasting results",
      "Enhances natural beauty",
      "Saves time and effort daily",
    ],
    image: "/images/waxing-permanent-makeup.jpg",
    video: "/video/waxing-permanent-makeup.mp4",
  },
];

// ✅ Metadata
export async function generateMetadata({ params }) {
  const treatment = rejuvenationTreatments.find(
    (t) => t.slug === params.treatment
  );

  return {
    title: treatment
      ? `${treatment.name} | Skin Rejuvenation - Chelan Valley`
      : "Skin Rejuvenation | Chelan Valley",
    description:
      treatment?.desc ||
      "Refresh and renew your skin with professional aesthetic care.",
  };
}

// ✅ Main Page
export default function RejuvenationTreatmentPage({ params }) {
  const treatment = rejuvenationTreatments.find(
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

  const otherTreatments = rejuvenationTreatments.filter(
    (t) => t.slug !== params.treatment
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-neutral text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">{treatment.name}</h1>
          <p className="text-lg text-neutral-light">{treatment.desc}</p>
        </div>
      </section>

      {/* About Treatment */}
      <CurrentSection treatment={treatment} />

      {/* In Action */}
      <InActionSection treatment={treatment} />

      {/* Other Treatments */}
      <section className="py-20 bg-[#FBF6EE] text-center">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16 xl:px-24">
          <h3 className="text-2xl font-bold text-primary mb-8">
            Explore Other Rejuvenation Treatments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherTreatments.map((item) => (
              <a
                key={item.slug}
                href={`/skin-rejuvenation/${item.slug}`}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
