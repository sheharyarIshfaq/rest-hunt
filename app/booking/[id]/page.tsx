import React from "react";
import Navbar from "@/components/Shared/Navbar";
import BookingDetailsSection from "@/containers/booking-detail-page/booking-details-section/page";
import ReviewSection from "@/containers/booking-detail-page/review-section/page";
import DUMMY_PROPERTIES from "@/data/properties";
import { BsChevronLeft } from "react-icons/bs";

const BookingDetailPage = ({ params }: { params: { id: string } }) => {
  const property = DUMMY_PROPERTIES.find(
    (property) => property.id === Number(params.id)
  );
  return (
    <>
      <Navbar showSearch={true} />
      {property && (
        <div className="container py-6 flex flex-col-reverse sm:flex-row justify-between gap-6">
          <div className="flex-1">
            <button>
              <BsChevronLeft className="text-xl" />
            </button>
            <ReviewSection />
          </div>
          <div className="flex justify-end flex-1">
            <BookingDetailsSection
              title={property?.title}
              image={property?.image}
              price={property?.price}
              moveInDate="2023-10-10"
              moveOutDate="2024-10-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingDetailPage;
