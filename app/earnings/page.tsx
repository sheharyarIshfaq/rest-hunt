import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import EarningsDataSection from "@/containers/earnings-page/earning-data-section";
import EarningsTable from "@/containers/earnings-page/earnings-table";

const EarningsPage = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>My Earnings</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">My Earnings</h1>
        <div className="mt-6">
          <EarningsDataSection />
          <EarningsTable />
        </div>
      </div>
    </>
  );
};

export default EarningsPage;
