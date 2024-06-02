"use client";
import React, { useEffect } from "react";
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
import { useAppSelector } from "@/redux/store";
import SyncLoader from "react-spinners/SyncLoader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const SavedPropertiesPage = () => {
  const { token } = useAppSelector((state) => state.auth);

  const [favouriteProperties, setFavouriteProperties] = React.useState<any[]>(
    []
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  const fetchUserFavourites = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/users/favourites?page=${currentPage}
      `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();
      if (responseData.error) {
        console.log(responseData.error);
        return;
      }

      setCurrentPage(responseData.currentPage);
      setTotalPages(responseData.totalPages);

      if (currentPage === 1) {
        setFavouriteProperties(responseData.properties);
      } else {
        setFavouriteProperties([
          ...favouriteProperties,
          ...responseData.properties,
        ]);
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserFavourites();
    }
  }, [token, currentPage]);

  const removeFromFavourites = async (propertyId: string) => {
    const updatedProperties = favouriteProperties.filter(
      (property) => property._id !== propertyId
    );
    setFavouriteProperties(updatedProperties);
  };

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
        {!loading && (
          <>
            <div className="mt-6">
              <h1 className="text-2xl font-bold">Saved Properties</h1>
              {favouriteProperties?.length > 0 ? (
                <PropertiesList
                  properties={favouriteProperties}
                  handleRemoveFavourite={removeFromFavourites}
                />
              ) : (
                <NoResultSection />
              )}
            </div>
            {currentPage < totalPages && (
              <div className="flex items-center justify-center pt-14 mb-6">
                <Button
                  variant={"outline"}
                  className="border-black"
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  View More
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
      </div>
      <Footer />
    </>
  );
};

export default SavedPropertiesPage;
