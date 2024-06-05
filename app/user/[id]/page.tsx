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

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getUserData(userId: string) {
  const res = await fetch(`${BACKEND_URL}/users/${userId}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data?.user;
}

const UserProfilePage = async ({ params }: { params: { id: string } }) => {
  const user = await getUserData(params.id);

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
            <UserDetails
              image={user?.profilePicture}
              name={user?.name}
              createdAt={user?.createdAt}
            />
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
                <AboutUser address={user?.location} email={user?.email} />
              </TabsContent>
              <TabsContent value="reviews">
                <UserReviews
                  reviewsCount={user?.reviewsCount}
                  averageRating={user?.averageRating}
                  reviews={user?.reviews}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
