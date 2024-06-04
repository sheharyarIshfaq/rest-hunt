"use client";
import React from "react";
import Navbar from "@/components/Shared/Navbar";
import BookingDetailsSection from "@/containers/booking-detail-page/booking-details-section/page";
import ReviewSection from "@/containers/booking-detail-page/review-section/page";
import { BsChevronLeft } from "react-icons/bs";
import { useAppSelector } from "@/redux/store";
import SyncLoader from "react-spinners/SyncLoader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const BookingDetailPage = ({ params }: { params: { id: string } }) => {
  const { token } = useAppSelector((state) => state.auth);

  const [booking, setBooking] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchBooking = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/bookings/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
      setBooking(responseData.data);
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBooking();
  }, [params.id, token]);

  return (
    <>
      <Navbar showSearch={true} />
      {!loading && (
        <div className="container py-6 flex flex-col-reverse sm:flex-row justify-between gap-6">
          <div className="flex-1">
            <button>
              <BsChevronLeft className="text-xl" />
            </button>
            <ReviewSection />
          </div>
          <div className="flex justify-end flex-1">
            <BookingDetailsSection
              image={booking?.room?.images?.[0]}
              property={booking?.property?.name}
              price={booking?.room?.rentAmount}
              moveInDate={booking?.moveIn}
              moveOutDate={booking?.moveOut}
              rentAmountUnit={booking?.room?.rentAmountUnit}
              totalAmount={booking?.total}
            />
          </div>
        </div>
      )}
      {loading && (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <SyncLoader color="#34C759" />
        </div>
      )}
    </>
  );
};

export default BookingDetailPage;
