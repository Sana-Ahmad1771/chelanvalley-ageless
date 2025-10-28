import React from "react";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import CurrentSection from "@/app/ageless-beauty/[treatment]/CurrentSection";
import InActionSection from "@/app/ageless-beauty/[treatment]/InActionSection";

// ✅ Chelan Valley Spa Pages (same as Mega Menu)
const spaPages = [
  {
    slug: "our-philosophy",
    name: "Our Philosophy",
    desc: "Our goal is to enhance your natural beauty through advanced skincare.",
    longDesc:
      "At Chelan Valley Spa, we believe in personalized care that celebrates your individuality. Our philosophy revolves around enhancing your natural radiance — not changing who you are. Each treatment is thoughtfully designed to nourish, restore, and rejuvenate your skin using clinically proven methods and gentle techniques.",
    benefits: [
      "Personalized, results-driven care",
      "Gentle and non-invasive methods",
      "Commitment to long-term skin health",
      "A holistic approach to beauty and wellness",
    ],
    image: "/images/service-1.jpg",
    video: "https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633360/video-05_vnmmfv.mp4",
  },
  {
    slug: "dermalogica-products",
    name: "Dermalogica Products",
    desc: "We use all Dermalogica skincare — grease-free and cruelty-free.",
    longDesc:
      "Chelan Valley Spa proudly uses Dermalogica products in every treatment. These professional-grade formulas are clean, cruelty-free, and tailored for all skin types. Free of artificial fragrances and parabens, they deliver deep hydration, protection, and visible results without irritation.",
    benefits: [
      "Cruelty-free and clean ingredients",
      "No parabens, sulfates, or artificial fragrances",
      "Clinically tested for effectiveness",
      "Ideal for sensitive and acne-prone skin",
    ],
    image: "/images/product-3.jpg",
    video: "https://res.cloudinary.com/dicqr2hqx/video/upload/v1761633324/derma_ajrmbc.mp4",
  },
  {
    slug: "meet-nelly",
    name: "Meet Nelly",
    desc: "Your rejuvenation specialist dedicated to personalized care.",
    longDesc:
      "Meet Nelly — the heart of Chelan Valley Spa. With years of experience in advanced skincare, Nelly combines science, artistry, and compassion to deliver transformative results. Her goal is to ensure every client feels confident and radiant through customized treatments and expert guidance.",
    benefits: [
      "Certified skincare professional",
      "Specializes in facial rejuvenation and relaxation therapies",
      "Committed to ongoing education and innovation",
      "Personalized consultation with every visit",
    ],
    image: "/images/nelly.jpg", // optional — use an actual portrait photo
    video: "", // no video for person
  },
];

// ✅ Metadata for SEO
export async function generateMetadata({ params }) {
  const page = spaPages.find((p) => p.slug === params.treatment);
  return {
    title: page
      ? `${page.name} | Chelan Valley Spa`
      : "Chelan Valley Spa | Rejuvenate & Relax",
    description:
      page?.desc ||
      "Relax, rejuvenate, and rediscover your confidence at Chelan Valley Spa.",
  };
}

// ✅ Main Component
export default function SpaPage({ params }) {
  const page = spaPages.find((p) => p.slug === params.treatment);

  if (!page) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-dark/60">Please check the URL.</p>
      </section>
    );
  }

  const otherPages = spaPages.filter((p) => p.slug !== params.treatment);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-neutral text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">{page.name}</h1>
          <p className="text-lg text-neutral-light">{page.desc}</p>
        </div>
      </section>

      {/* ✅ Conditional Layouts */}
      {page.slug === "meet-nelly" ? (
        // === Meet Nelly Custom Layout ===
        <section className="py-20 bg-[#FBF6EE]">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <img
                src={page.image}
                alt="Nelly"
                className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
              />
            </div>
            <div className="flex-1 text-dark">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {page.name}
              </h2>
              <p className="text-lg text-dark/80 leading-relaxed mb-6">
                {page.longDesc}
              </p>
              <ul className="space-y-3">
                {page.benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-dark/80 leading-snug"
                  >
                    <span className="text-primary text-lg mt-[3px]">✔</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        // === Default Layout (Philosophy / Dermalogica) ===
        <>
          <CurrentSection treatment={page} />
          <InActionSection treatment={page} />
        </>
      )}

      {/* ✅ Hide Explore Section for Meet Nelly */}
      {page.slug !== "meet-nelly" && (
        <section className="py-20 bg-[#FBF6EE] text-center">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-16 xl:px-24">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Explore More About Chelan Valley Spa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPages.map((item) => (
                <a
                  key={item.slug}
                  href={`/chelan-valley-spa/${item.slug}`}
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
      )}

      <Footer />
    </>
  );
}
