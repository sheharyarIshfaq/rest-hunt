import React from "react";
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

const MyBookingsPage = () => {
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
        <div className="mt-6">
          <h1 className="text-2xl font-bold">My Bookings</h1>
          {/* <NoResultSection /> */}
          <BookingList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyBookingsPage;
