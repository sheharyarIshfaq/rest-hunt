"use client";
import CustomSearch from "@/components/CustomSearch";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import DataSection from "@/containers/search-page/data-section";
import FilterSection from "@/containers/search-page/filters-section";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import SyncLoader from "react-spinners/SyncLoader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const searchQuery = searchParams?.query || "";

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    if (pageNumber > totalPages) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${BACKEND_URL}/properties?search=${searchQuery}&page=${pageNumber}`
      );
      const responseData = await response.json();

      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
      console.log(responseData);
      setPageNumber(responseData.currentPage);
      setTotalPages(responseData.totalPages);
      if (pageNumber === 1) {
        setProperties(responseData.data);
      } else {
        setProperties([...properties, ...responseData.data]);
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [pageNumber, searchQuery]);

  useEffect(() => {
    console.log(searchParams);
    console.log(searchQuery);
    console.log(pageNumber);
    console.log(totalPages);
  }, [searchParams, searchQuery, pageNumber, totalPages]);

  return (
    <>
      <Navbar showSearch={true} isDark={true} />
      <div className="container w-full sm:hidden">
        <CustomSearch isSmall={true} className="w-full" />
      </div>
      <FilterSection />
      {!loading && (
        <>
          <DataSection properties={properties} />
          {pageNumber < totalPages && (
            <div className="py-10 flex items-center justify-center">
              <Button
                variant="outline"
                className="border-black font-semibold"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={loading}
              >
                Load More
                <BsChevronRight className="text-xl" />
              </Button>
            </div>
          )}
        </>
      )}
      {loading && (
        <div className="py-10 flex items-center justify-center h-[70vh]">
          <SyncLoader color="#34C759" />
        </div>
      )}
      <div className="border-t border-gray-200"></div>
      <Footer />
    </>
  );
}
