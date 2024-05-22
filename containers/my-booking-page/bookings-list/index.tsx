import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DUMMY_PROPERTIES from "@/data/properties";
import HorizontalPropertyCard from "@/components/HorizontalPropertyCard";
import moment from "moment";
import { Button } from "@/components/ui/button";

const BookingList = () => {
  return (
    <div className="mt-6">
      <Tabs defaultValue="previous">
        <TabsList>
          <TabsTrigger value="previous">Previous</TabsTrigger>
          <TabsTrigger value="present">Present</TabsTrigger>
        </TabsList>
        <TabsContent value="previous">
          <div className="grid lg:grid-cols-2 gap-4">
            {DUMMY_PROPERTIES.map((property, index) => (
              <HorizontalPropertyCard
                key={property.id}
                bookingId={property.id}
                image={property.image}
                title={property.title}
                price={property.price}
                startDate={moment()
                  .subtract(index, "days")
                  .format("DD/MM/YYYY")}
                endDate={moment()
                  .subtract(index - 2, "days")
                  .format("DD/MM/YYYY")}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="present">
          <div className="grid lg:grid-cols-2 gap-4">
            {DUMMY_PROPERTIES.map((property, index) => (
              <HorizontalPropertyCard
                key={property.id}
                bookingId={property.id}
                image={property.image}
                title={property.title}
                price={property.price}
                startDate={moment()
                  .subtract(index, "days")
                  .format("DD/MM/YYYY")}
                endDate={moment()
                  .subtract(index - 2, "days")
                  .format("DD/MM/YYYY")}
              />
            ))}
            {DUMMY_PROPERTIES.map((property, index) => (
              <HorizontalPropertyCard
                key={property.id}
                bookingId={property.id}
                image={property.image}
                title={property.title}
                price={property.price}
                startDate={moment()
                  .subtract(index, "days")
                  .format("DD/MM/YYYY")}
                endDate={moment()
                  .subtract(index - 2, "days")
                  .format("DD/MM/YYYY")}
              />
            ))}
          </div>
          <div className="flex items-center justify-center pt-14 mb-6">
            <Button className="bg-main">View More</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingList;
