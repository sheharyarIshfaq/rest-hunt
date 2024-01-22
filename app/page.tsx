import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import DestinationsSection from "@/containers/home-page/destinations-section";
import DetailSection from "@/containers/home-page/detail-section";
import FAQSection from "@/containers/home-page/faq-section";
import HeroSection from "@/containers/home-page/hero-section";
import InfoSection from "@/containers/home-page/info-section";
import TopPropertiesSection from "@/containers/home-page/top-properties-section";
import TrendingPropertiesSection from "@/containers/home-page/trending-properties-section";

export default function Home() {
  return (
    <>
      <div className="sm:h-screen flex flex-col justify-between">
        <div className="flex-1" id="hero-section">
          <Navbar isDark={true} />
          <HeroSection />
        </div>
        <InfoSection />
      </div>
      <DestinationsSection />
      <TrendingPropertiesSection />
      <TopPropertiesSection />
      <DetailSection />
      <FAQSection />
      <Footer />
    </>
  );
}
