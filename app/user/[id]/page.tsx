import React from "react";
import Navbar from "@/components/Shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import UserDetails from "@/containers/profile-detail-page/user-details";
import AboutUser from "@/containers/profile-detail-page/about-user";
import UserReviews from "@/containers/profile-detail-page/user-reviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar />
      <div className="container mb-8 mt-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>User Profile</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <div>
            <UserDetails />
            <Tabs
              defaultValue="about"
              className="flex justify-center items-center flex-col"
            >
              <TabsList className="mx-auto">
                <TabsTrigger
                  value="about"
                  className="min-w-[100px] sm:min-w-[200px]"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="min-w-[100px] sm:min-w-[200px]"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="about">
                <AboutUser />
              </TabsContent>
              <TabsContent value="reviews">
                <UserReviews />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
