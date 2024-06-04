import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HorizontalPropertyCard from "@/components/HorizontalPropertyCard";
import moment from "moment";

const BookingList = ({
  bookings,
  filterValue,
  setFilterValue,
}: {
  bookings: any[];
  filterValue: string;
  setFilterValue: (value: string) => void;
}) => {
  console.log(bookings);
  return (
    <div className="mt-6">
      <Tabs
        value={filterValue}
        onValueChange={(value) => setFilterValue(value)}
      >
        <TabsList>
          <TabsTrigger value="previous">Previous</TabsTrigger>
          <TabsTrigger value="present">Present</TabsTrigger>
        </TabsList>
        <TabsContent value="previous">
          {bookings?.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-4">
              {bookings.map((booking, index) => (
                <HorizontalPropertyCard
                  key={booking?._id}
                  bookingId={booking?._id}
                  image={booking?.room?.images?.[0]}
                  title={booking?.property?.name}
                  price={booking?.total}
                  roomCategory={booking?.room?.category}
                  startDate={moment(booking?.moveIn).format("DD/MM/YYYY")}
                  endDate={moment(booking?.moveOut).format("DD/MM/YYYY")}
                  status={booking?.status}
                  userData={booking?.user}
                  rentAmountUnit={booking?.room?.rentAmountUnit}
                />
              ))}
            </div>
          )}
          {bookings?.length === 0 && (
            <div className="my-6 pr-2">
              <p className="text-lg font-semibold">No bookings found</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="present">
          {bookings?.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-4">
              {bookings.map((booking, index) => (
                <HorizontalPropertyCard
                  key={booking?._id}
                  bookingId={booking?._id}
                  image={booking?.room?.images?.[0] || booking?.fallBackImage}
                  title={booking?.property?.name}
                  price={booking?.total}
                  startDate={moment(booking?.moveIn).format("DD/MM/YYYY")}
                  endDate={moment(booking?.moveOut).format("DD/MM/YYYY")}
                  status={booking?.status}
                  roomCategory={booking?.room?.category}
                  userData={booking?.user}
                  rentAmountUnit={booking?.room?.rentAmountUnit}
                />
              ))}
            </div>
          )}
          {bookings?.length === 0 && (
            <div className="my-6 pr-2">
              <p className="text-lg font-semibold">No bookings found</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingList;
