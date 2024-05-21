import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import React from "react";

const ManagePropertiesLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Navbar showSearch={false} />
      <div className="container mb-8 mt-2">{children}</div>
      <Footer />
    </div>
  );
};

export default ManagePropertiesLayout;
