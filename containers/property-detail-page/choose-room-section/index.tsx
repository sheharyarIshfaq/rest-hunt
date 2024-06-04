import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import RoomCard from "./RoomCard";

const ChooseRoomSection = ({ property }: { property: any[] }) => {
  return (
    <div className="mt-4 border-b pb-6" id="rooms">
      <h1 className="text-lg font-semibold">Choose Your Room</h1>
      <div className="mt-3">
        <Tabs defaultValue="private">
          <TabsList>
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
            <TabsTrigger value="entire">Entire Place</TabsTrigger>
          </TabsList>
          <TabsContent value="private">
            <RoomCard property={property} type="private" />
          </TabsContent>
          <TabsContent value="shared">
            <RoomCard property={property} type="shared" />
          </TabsContent>
          <TabsContent value="entire">
            <RoomCard property={property} type="entire-place" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChooseRoomSection;
