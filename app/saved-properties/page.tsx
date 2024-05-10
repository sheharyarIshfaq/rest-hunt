import React from "react";
import Navbar from "@/components/Shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import NoResultSection from "@/containers/saved-properties-page/no-result-section";
import Footer from "@/components/Shared/Footer";
import PropertiesList from "@/containers/saved-properties-page/properties-list";
import { Button } from "@/components/ui/button";

const SavedPropertiesPage = () => {
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
            <BreadcrumbItem>Saved Properties</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Saved Properties</h1>
          {/* <NoResultSection /> */}
          <PropertiesList />
        </div>
        <div className="flex items-center justify-center pt-14 mb-6">
          <Button variant={"outline"} className="border-black">
            View More
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedPropertiesPage;
