import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DUMMY_PROPERTIES from "@/data/properties";
import RoomCard from "./RoomCard";

const ChooseRoomSection = () => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Choose Your Room</h1>
      <div className="mt-3">
        <Tabs defaultValue="private">
          <TabsList>
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
            <TabsTrigger value="entire">Entire Place</TabsTrigger>
          </TabsList>
          <TabsContent value="private">
            <p>10 private rooms are available </p>
            <div className="flex flex-col gap-4 mt-4">
              <RoomCard
                title={DUMMY_PROPERTIES[0].title}
                price={DUMMY_PROPERTIES[0].price}
                image={DUMMY_PROPERTIES[0].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="shared">
            <p>10 shared rooms are available </p>
            <div className="flex flex-col gap-4 mt-4">
              <RoomCard
                title={DUMMY_PROPERTIES[1].title}
                price={DUMMY_PROPERTIES[1].price}
                image={DUMMY_PROPERTIES[1].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
              <RoomCard
                title={DUMMY_PROPERTIES[2].title}
                price={DUMMY_PROPERTIES[2].price}
                image={DUMMY_PROPERTIES[2].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="entire">
            <p>10 entire places are available </p>
            <div className="flex flex-col gap-4 mt-4">
              <RoomCard
                title={DUMMY_PROPERTIES[3].title}
                price={DUMMY_PROPERTIES[3].price}
                image={DUMMY_PROPERTIES[3].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
              <RoomCard
                title={DUMMY_PROPERTIES[0].title}
                price={DUMMY_PROPERTIES[0].price}
                image={DUMMY_PROPERTIES[0].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChooseRoomSection;
