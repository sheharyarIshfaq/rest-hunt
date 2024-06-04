"use client";
import React, { useState } from "react";
import Navbar from "@/components/Shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import NoResultSection from "@/containers/my-booking-page/no-result-section";
import Footer from "@/components/Shared/Footer";
import BookingList from "@/containers/my-booking-page/bookings-list";
import { useAppSelector } from "@/redux/store";
import { Button } from "@/components/ui/button";
import SyncLoader from "react-spinners/SyncLoader";
import { BsChevronRight } from "react-icons/bs";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const MyBookingsPage = () => {
  const { token, user } = useAppSelector((state) => state.auth);

  const [bookings, setBookings] = React.useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("previous");

  const fetchBookings = async () => {
    if (pageNumber > totalPages) return;
    try {
      let url = `${BACKEND_URL}/bookings?page=${pageNumber}&status=${filterValue}`;
      if (user?.role === "property_owner") {
        url = `${BACKEND_URL}/bookings/owner?page=${pageNumber}&status=${filterValue}`;
      }
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();

      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
      setPageNumber(responseData.currentPage);
      setTotalPages(responseData.totalPages);
      if (pageNumber === 1) {
        setBookings(responseData.data);
      } else {
        setBookings([...bookings, ...responseData.data]);
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBookings();
  }, [pageNumber, filterValue]);

  return (
    <>
      <Navbar showSearch={true} />
      <div className="container mb-8 mt-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>My Bookings</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {!loading && (
          <div className="mt-6">
            <h1 className="text-2xl font-bold">My Bookings</h1>
            {/* <NoResultSection /> */}
            <BookingList
              bookings={bookings}
              filterValue={filterValue}
              setFilterValue={(value: string) => {
                setFilterValue(value);
                setPageNumber(1);
                setLoading(true);
              }}
            />
            {pageNumber < totalPages && (
              <div className="py-10 flex items-center justify-center">
                <Button
                  variant="outline"
                  className="border-black font-semibold"
                  onClick={() => setPageNumber(pageNumber + 1)}
                  disabled={loading}
                >
                  Load More
                  <BsChevronRight className="text-xl" />
                </Button>
              </div>
            )}
            {pageNumber < totalPages && (
              <div className="flex items-center justify-center pt-14 mb-6">
                <Button
                  className="bg-main"
                  onClick={() => setPageNumber(pageNumber + 1)}
                  disabled={loading}
                >
                  View More
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
      {loading && (
        <div className="py-10 flex items-center justify-center h-[70vh]">
          <SyncLoader color="#34C759" />
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyBookingsPage;
