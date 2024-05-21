"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInfo from "./BasicInfo";
import DescriptionAndFAQ from "./DescriptionAndFAQ";
import { Button } from "@/components/ui/button";

const PropertyDataForm = () => {
  const [activeTab, setActiveTab] = React.useState("basic");
  return (
    <>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList>
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="description">Description & FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <BasicInfo />
        </TabsContent>
        <TabsContent value="description">
          <DescriptionAndFAQ />
        </TabsContent>
      </Tabs>
      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="outline" className="border-black text-black">
          Cancel
        </Button>
        {activeTab === "basic" && (
          <Button
            className="bg-main"
            onClick={() => setActiveTab("description")}
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
