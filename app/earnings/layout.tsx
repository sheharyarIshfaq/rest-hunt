import React from "react";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const EarningsPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar showSearch={false} />
      <div className="container mb-8 mt-2">{children}</div>
      <Footer />
    </div>
  );
};

export default EarningsPageLayout;
