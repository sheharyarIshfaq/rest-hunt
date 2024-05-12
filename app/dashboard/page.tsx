import React from "react";
import Navbar from "@/components/Shared/Navbar";
import WaveIcon from "@/public/icons/wave.svg";
import Image from "next/image";
import UserDetailsSection from "@/containers/dashboard-page/user-details-section";
import ControlsSection from "@/containers/dashboard-page/controls-section";
import HelpSection from "@/containers/dashboard-page/help-section";
import Footer from "@/components/Shared/Footer";

const OwnerDashboard = () => {
  return (
    <>
      <Navbar showSearch={false} />
      <div className="container mb-8 mt-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl xs:text-3xl font-semibold">
            Welcome, Haseeb
          </h1>
          <Image src={WaveIcon} alt="Wave" className="w-10 xs:w-12" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-14 my-10">
          <UserDetailsSection />
          <ControlsSection />
        </div>
        <HelpSection />
      </div>
      <Footer />
    </>
  );
};

export default OwnerDashboard;
