import React from "react";
import Header from "../components/common/Header";
import ContactFormSection from "../components/pages/contact/ContactFormSection";
import ContactHero from "../components/pages/contact/ContactHero";
import Footer from "../components/common/Footer";
import HelpSection from "../components/pages/contact/HelpSection";

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
