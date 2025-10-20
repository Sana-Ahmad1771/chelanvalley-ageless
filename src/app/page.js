import Header from "./components/common/Header";
import AboutSection from "./components/pages/home/AboutSection";
import BeforeAfterSection from "./components/pages/home/BeforeAfterSection";
import Experience from "./components/pages/home/ServicesSection";
import HeroSection from "./components/pages/home/HeroSection";
import HeadlineBanner from "./components/pages/home/HeadlineBanner";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
   <>
   <Header />
   <HeadlineBanner />
   <HeroSection />
   <AboutSection />
   <Experience />
   <BeforeAfterSection />
   <Footer /> 
   </>
  );
}
