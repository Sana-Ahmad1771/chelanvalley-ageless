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
