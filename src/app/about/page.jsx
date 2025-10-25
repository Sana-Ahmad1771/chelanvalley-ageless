import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AboutHero from "../components/pages/about/AboutHero";
import AboutUs from "../components/pages/about/AboutUs";
import { BodyCareResults } from "../components/pages/about/BodyCareResults";
import DermalogicaSection from "../components/pages/about/DermalogicaProductsShowcase";
import LuxuryServices from "../components/pages/about/LuxuryServices";
import OurPhilosophy from "../components/pages/about/OurPhilosophySection";
import OurTeam from "../components/pages/about/OurTeam";
import SpaExperience from "../components/pages/about/SpaExperience";
import SubscribeSection from "../components/pages/about/SubscribeSection";
import { TherapieSection } from "../components/pages/about/TherapieSection";
import UltherapySection from "../components/pages/about/UltherapyHighlightSection";
import UserReviews from "../components/pages/about/UserReviews";
import WhatWeDo from "../components/pages/about/WhatWeDo";

export const metadata = {
  title: "About Us | Chelan Valley Ageless",
  description:
    "Learn about Chelan Valley Ageless — where science meets serenity. Discover our story, philosophy, and dedication to advanced aesthetic and wellness treatments.",
  alternates: {
    canonical: "https://chelanvalley-ageless.vercel.app/about",
  },
  openGraph: {
    title: "About Chelan Valley Ageless",
    description:
      "Discover the story and mission behind Chelan Valley Ageless. We combine innovative skincare science with holistic wellness to help you look and feel your best.",
    url: "https://chelanvalley-ageless.vercel.app/about",
    siteName: "Chelan Valley Ageless",
    images: [
      {
        url: "https://chelanvalley-ageless.vercel.app/images/about-1.jpg",
        width: 1200,
        height: 630,
        alt: "About Chelan Valley Ageless",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Chelan Valley Ageless",
    description:
      "Chelan Valley Ageless blends modern skincare science with a holistic approach to beauty and wellness. Learn more about our philosophy and expert team.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutUs />
      <WhatWeDo />
      <OurPhilosophy />
      <UltherapySection />
      <DermalogicaSection />
      <SpaExperience />
      <LuxuryServices />
      <TherapieSection />
      <BodyCareResults />
      <OurTeam />
      <UserReviews />
      <SubscribeSection />
      <Footer />
    </>
  );
}
