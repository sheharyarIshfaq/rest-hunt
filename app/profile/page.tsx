import React from "react";
import Navbar from "@/components/Shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import ImageUploadSection from "@/containers/profile-page/image-upload-section";
import UserInfoSection from "@/containers/profile-page/user-info-section";
import Footer from "@/components/Shared/Footer";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>My Information</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-6">
          <h1 className="text-2xl font-bold">My Information</h1>
          <ImageUploadSection />
          <UserInfoSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
