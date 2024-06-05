"use client";
import CustomSearch from "@/components/CustomSearch";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import DataSection from "@/containers/search-page/data-section";
import FilterSection from "@/containers/search-page/filters-section";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import SyncLoader from "react-spinners/SyncLoader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const { token } = useAppSelector((state) => state.auth);

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [properties, setProperties] = useState<any[]>([]);
  const [favourites, setFavourites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/properties?search=${searchQuery}&page=${pageNumber}`
      );
      const responseData = await response.json();
      console.log(responseData);

      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
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

  const getUserFavouriteProperties = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/favourites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
      console.log(responseData.favourites);
      setFavourites(responseData.favourites);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (token) {
      getUserFavouriteProperties();
    }
  }, [token]);

  const updateFavouriteHandler = (propertyId: string) => {
    if (favourites.find((fav) => fav.property === propertyId)) {
      const newFavourites = favourites.filter(
        (fav) => fav.property !== propertyId
      );
      setFavourites(newFavourites);
    } else {
      setFavourites([...favourites, { property: propertyId }]);
    }
  };

  return (
    <>
      <Navbar showSearch={true} isDark={true} />
      <div className="container w-full sm:hidden">
        <CustomSearch isSmall={true} className="w-full" />
      </div>
      {/* <FilterSection /> */}
      {!loading && (
        <>
          <DataSection
            properties={properties}
            favourites={favourites}
            updatedFavourites={updateFavouriteHandler}
          />
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
