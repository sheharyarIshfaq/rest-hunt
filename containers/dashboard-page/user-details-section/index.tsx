import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDetailsSection = ({ user }: { user: any }) => {
  return (
    <div className="flex-1">
      <div className="border-[1.5px] rounded-md p-6">
        <div className="flex items-center gap-4 border-b-[1.5px] pb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user?.profilePicture} />
            <AvatarFallback>
              {user?.name
                ?.split(" ")
                .map((name: string) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-semibold">{user?.name || "Owner"}</h1>
        </div>
        <div className="my-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-between">
            <h2>Response rate</h2>
            <p className="text-main font-medium">100%</p>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <h2>Rating</h2>
            <p className="text-main font-medium">
              {Number(user?.averageRating).toFixed(1) || 0}/5
            </p>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <h2>Reviews Count</h2>
            <p className="text-main font-medium">{user?.reviewsCount}</p>
          </div>
        </div>
      </div>
      <div className="border-[1.5px] rounded-md p-4 mt-6">
        <h1 className="text-lg font-semibold">0 unread messages</h1>
        <p className="my-2">
          Response rate is good, keep providing quick responses
        </p>
      </div>
    </div>
  );
};

export default UserDetailsSection;
