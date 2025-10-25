import Header from "./components/common/Header";
import AboutSection from "./components/pages/home/AboutSection";
import BeforeAfterSection from "./components/pages/home/BeforeAfterSection";
import Experience from "./components/pages/home/ServicesSection";
import HeroSection from "./components/pages/home/HeroSection";
import HeadlineBanner from "./components/pages/home/HeadlineBanner";
import Footer from "./components/common/Footer";
import PricingSection from "./components/pages/home/PricingSection";
import MassageTherapy from "./components/pages/home/MassageTherapy";

export const metadata = {
  title: "Chelan Valley Ageless | Luxury Skincare & Wellness Spa",
  description:
    "Rejuvenate your skin and spirit at Chelan Valley Ageless — where science meets serenity. Experience advanced skincare, body treatments, and holistic wellness designed for timeless beauty.",
  alternates: {
    canonical: "https://chelanvalley-ageless.vercel.app/",
  },
  openGraph: {
    title: "Chelan Valley Ageless | Luxury Skincare & Wellness Spa",
    description:
      "Discover advanced aesthetic therapies and rejuvenating treatments at Chelan Valley Ageless — restoring balance, beauty, and confidence through expert care.",
    url: "https://chelanvalley-ageless.vercel.app/",
    siteName: "Chelan Valley Ageless",
    images: [
      {
        url: "https://chelanvalley-ageless.vercel.app/images/slide-01.jpg",
        width: 1200,
        height: 630,
        alt: "Chelan Valley Ageless Spa Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelan Valley Ageless | Luxury Skincare & Wellness Spa",
    description:
      "Luxury skincare and holistic wellness treatments for timeless beauty. Experience Chelan Valley Ageless today.",
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
   <HeadlineBanner />
   <HeroSection />
   <AboutSection />
   <Experience />
   <MassageTherapy />
   <BeforeAfterSection />
   <PricingSection />
   <Footer /> 
   </>
  );
}
