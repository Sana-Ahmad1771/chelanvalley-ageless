import React from "react";
import Header from "../components/common/Header";
import ContactFormSection from "../components/pages/contact/ContactFormSection";
import ContactHero from "../components/pages/contact/ContactHero";
import Footer from "../components/common/Footer";
import HelpSection from "../components/pages/contact/HelpSection";

export const metadata = {
  title: "Contact Us | Chelan Valley Ageless",
  description:
    "Get in touch with Chelan Valley Ageless for skincare consultations, appointments, or product inquiries. We're here to help you glow with confidence.",
  alternates: {
    canonical: "https://chelanvalley-ageless.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Chelan Valley Ageless",
    description:
      "Reach out to Chelan Valley Ageless for expert skincare guidance, wellness consultations, or booking details.",
    url: "https://chelanvalley-ageless.vercel.app/contact",
    siteName: "Chelan Valley Ageless",
    images: [
      {
        url: "https://chelanvalley-ageless.vercel.app/images/about-us-1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Chelan Valley Ageless",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Chelan Valley Ageless",
    description:
      "Connect with Chelan Valley Ageless for appointments, skincare consultations, or inquiries about our rejuvenating treatments.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactFormSection />
      <HelpSection />
      <Footer />
    </>
  );
};

export default page;
