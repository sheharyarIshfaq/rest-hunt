"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInfo from "./BasicInfo";
import DescriptionAndFAQ from "./DescriptionAndFAQ";
import { Button } from "@/components/ui/button";
import RoomInfo, { IRoom } from "./RoomInfo";

const PropertyDataForm = () => {
  const [activeTab, setActiveTab] = React.useState("basic");

  const [addedRooms, setAddedRooms] = React.useState<IRoom[]>([]);

  return (
    <>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="flex-col sm:flex-row w-full sm:w-auto h-auto sm:h-10 justify-start sm:justify-center">
          <TabsTrigger value="basic" className="w-full sm:w-auto">
            Basic Information
          </TabsTrigger>
          <TabsTrigger value="rooms" className="w-full sm:w-auto">
            Room Information
          </TabsTrigger>
          <TabsTrigger value="description" className="w-full sm:w-auto">
            Description & FAQ
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <BasicInfo />
        </TabsContent>
        <TabsContent value="rooms">
          <RoomInfo addedRooms={addedRooms} setAddedRooms={setAddedRooms} />
        </TabsContent>
        <TabsContent value="description">
          <DescriptionAndFAQ />
        </TabsContent>
      </Tabs>
      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="outline" className="border-black text-black">
          Cancel
        </Button>
        {(activeTab === "basic" || activeTab === "rooms") && (
          <Button
            className="bg-main"
            onClick={() => {
              setActiveTab(activeTab === "basic" ? "rooms" : "description");
            }}
          >
            Save & Next
          </Button>
        )}
        {activeTab === "description" && (
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-black text-black">
              Save as Draft
            </Button>
            <Button className="bg-main">Publish</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyDataForm;
