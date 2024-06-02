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
import OwnerDetailsSection from "@/containers/property-detail-page/owner-detail-section";
import { Button } from "@/components/ui/button";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getProperty(propertyId: string) {
  const res = await fetch(`${BACKEND_URL}/properties/${propertyId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data?.data;
}

const PropertyDeatailPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id);
  console.log("property", property);

  const getGeneralFacilities = (rooms: any) => {
    let generalFacilities: any[] = [];
    rooms.forEach((room: any) => {
      generalFacilities = [...generalFacilities, ...room.generalFacilities];
    });
    //remove duplicates
    generalFacilities = generalFacilities.filter(
      (item, index) => generalFacilities.indexOf(item) === index
    );
    return generalFacilities;
  };

  const getRoomFacilities = (rooms: any) => {
    let roomFacilities: any[] = [];
    rooms.forEach((room: any) => {
      roomFacilities = [...roomFacilities, ...room.roomFacilities];
    });
    //remove duplicates
    roomFacilities = roomFacilities.filter(
      (item, index) => roomFacilities.indexOf(item) === index
    );
    return roomFacilities;
  };

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
              <Link href={`/search?query=${params.id}`}>Property</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{property?.name}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {property && (
          <div className="mt-6">
            <div className="flex justify-between gap-6">
              <div className="flex-[2]">
                <PropertyImagesSection property={property} />
                <PropertyDetailsSection
                  name={property?.name}
                  address={property.address}
                  nearbySiteName={property.nearbySiteName}
                />
                <OwnerDetailsSection ownerData={property.owner} />
                <PropertyDescriptionSection
                  description={property?.description}
                />
                <PropertyFacilitiesSection
                  generalFacilities={getGeneralFacilities(property.rooms)}
                  roomFacilities={getRoomFacilities(property.rooms)}
                />
                <ChooseRoomSection />
                <PropertyLocationSection location={property?.location} />
                <PropertyFAQSection propertyFAQs={property?.faqs} />
                <PropertyReviewSection reviews={property?.reviews} />
              </div>
              <div className="hidden md:block flex-[1.2]">
                <PropertySideDetailSection />
              </div>
              <div
                className="md:hidden fixed bottom-0 left-0 bg-white p-3 w-full flex items-center justify-between gap-2 z-50"
                style={{
                  boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h1 className="text-xl font-medium">
                  Starting From 8000/Month
                </h1>
                <Button className="bg-main hover:bg-main font-semibold hover:shadow-md">
                  <a
                    className="w-full h-full flex items-center justify-center"
                    href="#rooms"
                  >
                    View Rooms
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200"></div>
      <SimilarPropertiesSection />
      <div className="border-t border-gray-200"></div>
      <Footer />
    </>
  );
};

export default PropertyDeatailPage;
