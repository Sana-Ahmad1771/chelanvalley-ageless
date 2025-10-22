import React from "react";
import Header from "../components/common/Header";
import ContactFormSection from "../components/pages/contact/ContactFormSection";
import ContactHero from "../components/pages/contact/ContactHero";
import Footer from "../components/common/Footer";

const page = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default page;
