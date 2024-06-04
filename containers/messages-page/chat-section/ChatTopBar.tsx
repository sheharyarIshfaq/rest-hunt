import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatTopBar = ({
  userData,
  online,
}: {
  userData: any;
  online: boolean;
}) => {
  return (
    <div className="border-b-[1.5px] p-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={userData?.profilePicture} />
          <AvatarFallback>{userData?.name[0]}</AvatarFallback>
        </Avatar>
        <h1 className="font-semibold text-lg">{userData?.name}</h1>
      </div>
      {/* <p className="text-label mt-1 text-sm font-medium">
        Last seen 2 days ago - 5th Feb, 2024
      </p> */}
      <div className="flex items-center gap-2">
        <div
          className={`h-3 w-3 rounded-full ${
            online ? "bg-green-500" : "bg-gray-500"
          }`}
        ></div>
        <p className="text-label text-sm font-medium">
          {online ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
};

export default ChatTopBar;
