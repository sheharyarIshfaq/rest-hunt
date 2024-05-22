import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import NoResultSection from "@/containers/manage-properties-page/no-result-section";
import { PropertiesList } from "@/containers/manage-properties-page/properties-list";

const ManageProperties = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>My Properties</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">My Properties</h1>
        <div className="mt-3">
          <Tabs defaultValue="active">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TabsList className="flex-wrap h-auto justify-normal sm:justify-center">
                <TabsTrigger value="active" className="md:min-w-[100px]">
                  Active
                </TabsTrigger>
                <TabsTrigger value="draft" className="md:min-w-[100px]">
                  Draft
                </TabsTrigger>
                <TabsTrigger value="pending" className="md:min-w-[100px]">
                  Pending
                </TabsTrigger>
                <TabsTrigger value="denied" className="md:min-w-[100px]">
                  Denied
                </TabsTrigger>
                <TabsTrigger value="paused" className="md:min-w-[100px]">
                  Paused
                </TabsTrigger>
              </TabsList>
              <Link href={"/manage-properties/new"}>
                <Button variant="outline" className="border-label">
                  <FaPlus className="mr-2 text-lg" />
                  Add Property
                </Button>
              </Link>
            </div>
            <TabsContent value="active">
              <PropertiesList />
            </TabsContent>
            <TabsContent value="draft">
              <NoResultSection />
            </TabsContent>
            <TabsContent value="pending">
              <PropertiesList />
            </TabsContent>
            <TabsContent value="denied">
              <PropertiesList />
            </TabsContent>
            <TabsContent value="paused">
              <PropertiesList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ManageProperties;
