import Navbar from "@/components/Shared/Navbar";
import HeroSection from "@/containers/home-page/hero-section";
import InfoSection from "@/containers/home-page/info-section";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div className="bg-[#99E3AC] flex-1">
          <Navbar />
          <HeroSection />
        </div>
        <InfoSection />
      </div>
    </>
  );
}
