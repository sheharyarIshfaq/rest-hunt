"use client";
import React, { useEffect } from "react";
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
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/redux/store";
import SyncLoader from "react-spinners/SyncLoader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const PropertiesContainer = ({
  properties,
  loading,
  currentPage,
  totalPages,
  totalCount,
  setCurrentPage,
  refetchProperties,
}: {
  properties: any[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  totalCount: number;
  refetchProperties: () => void;
}) => {
  return (
    <>
      {loading && (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <SyncLoader color="#34C759" />
        </div>
      )}
      {!loading && properties.length === 0 && <NoResultSection />}
      {!loading && properties.length > 0 && (
        <PropertiesList
          properties={properties}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          totalCount={totalCount}
          refetchProperties={refetchProperties}
        />
      )}
    </>
  );
};

const ManageProperties = () => {
  const { token } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = React.useState("Active");
  const [loading, setLoading] = React.useState(false);
  const [properties, setProperties] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(0);

  const getProperties = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${BACKEND_URL}/properties/owner?page=${currentPage}&status=${activeTab}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();
      if (responseData.error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.message,
        });
      }
      setProperties(responseData.data);
      setTotalPages(responseData.totalPages);
      setCurrentPage(responseData.currentPage);
      setTotalCount(responseData.totalCount);
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProperties();
  }, [activeTab, currentPage, token]);

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
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TabsList className="flex-wrap h-auto justify-normal sm:justify-center">
                <TabsTrigger value="Active" className="md:min-w-[100px]">
                  Active
                </TabsTrigger>
                <TabsTrigger value="Draft" className="md:min-w-[100px]">
                  Draft
                </TabsTrigger>
                <TabsTrigger value="Pending" className="md:min-w-[100px]">
                  Pending
                </TabsTrigger>
                <TabsTrigger value="Denied" className="md:min-w-[100px]">
                  Denied
                </TabsTrigger>
                <TabsTrigger value="Paused" className="md:min-w-[100px]">
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
            <TabsContent value="Active">
              <PropertiesContainer
                properties={properties}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                totalCount={totalCount}
                refetchProperties={getProperties}
              />
            </TabsContent>
            <TabsContent value="Draft">
              <PropertiesContainer
                properties={properties}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                totalCount={totalCount}
                refetchProperties={getProperties}
              />
            </TabsContent>
            <TabsContent value="Pending">
              <PropertiesContainer
                properties={properties}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                totalCount={totalCount}
                refetchProperties={getProperties}
              />
            </TabsContent>
            <TabsContent value="Denied">
              <PropertiesContainer
                properties={properties}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                totalCount={totalCount}
                refetchProperties={getProperties}
              />
            </TabsContent>
            <TabsContent value="Paused">
              <PropertiesContainer
                properties={properties}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                totalCount={totalCount}
                refetchProperties={getProperties}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ManageProperties;
