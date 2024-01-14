import Navbar from "@/components/Shared/Navbar";
import DestinationsSection from "@/containers/home-page/destinations-section";
import HeroSection from "@/containers/home-page/hero-section";
import InfoSection from "@/containers/home-page/info-section";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div className="flex-1" id="hero-section">
          <Navbar />
          <HeroSection />
        </div>
        <InfoSection />
      </div>
      <DestinationsSection />
    </>
  );
}
