import React from "react";
import Navbar from "@/components/Shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import PropertyImagesSection from "@/containers/property-detail-page/image-section";
import PropertySideDetailSection from "@/containers/property-detail-page/side-detail-section";
import PropertyDetailsSection from "@/containers/property-detail-page/details-section";
import PropertyDescriptionSection from "@/containers/property-detail-page/description-section";
import PropertyFacilitiesSection from "@/containers/property-detail-page/facilities-section";
import ChooseRoomSection from "@/containers/property-detail-page/choose-room-section";
import PropertyLocationSection from "@/containers/property-detail-page/location-section";
import PropertyFAQSection from "@/containers/property-detail-page/faq-section";
import PropertyReviewSection from "@/containers/property-detail-page/reviews-section";
import Footer from "@/components/Shared/Footer";
import SimilarPropertiesSection from "@/containers/property-detail-page/similar-properties-section";

const PropertyDeatailPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar showSearch={true} isDark={true} />
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/search/${params.id}`}>Property</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{params.id}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6">
          <div className="flex justify-between gap-6">
            <div className="flex-[2]">
              <PropertyImagesSection />
              <PropertyDetailsSection />
              <PropertyDescriptionSection />
              <PropertyFacilitiesSection />
              <ChooseRoomSection />
              <PropertyLocationSection />
              <PropertyFAQSection />
              <PropertyReviewSection />
            </div>
            <div className="flex-[1.2]">
              <PropertySideDetailSection />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
      <SimilarPropertiesSection />
      <div className="border-t border-gray-200"></div>
      <Footer />
    </>
  );
};

export default PropertyDeatailPage;
