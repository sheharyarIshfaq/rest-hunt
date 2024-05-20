import React from "react";
import Navbar from "@/components/Shared/Navbar";
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
import Footer from "@/components/Shared/Footer";
import { PropertiesList } from "@/containers/manage-properties-page/properties-list";

const ManageProperties = () => {
  return (
    <>
      <Navbar showSearch={false} />
      <div className="container mb-8 mt-2">
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
              <div className="flex items-center justify-between gap-3">
                <TabsList>
                  <TabsTrigger value="active" className="sm:min-w-[100px]">
                    Active
                  </TabsTrigger>
                  <TabsTrigger value="draft" className="sm:min-w-[100px]">
                    Draft
                  </TabsTrigger>
                  <TabsTrigger value="pending" className="sm:min-w-[100px]">
                    Pending
                  </TabsTrigger>
                  <TabsTrigger value="denied" className="sm:min-w-[100px]">
                    Denied
                  </TabsTrigger>
                  <TabsTrigger value="paused" className="sm:min-w-[100px]">
                    Paused
                  </TabsTrigger>
                </TabsList>
                <Button variant="outline" className="border-label">
                  <FaPlus className="mr-2 text-lg" />
                  Add Property
                </Button>
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
      </div>
      <Footer />
    </>
  );
};

export default ManageProperties;