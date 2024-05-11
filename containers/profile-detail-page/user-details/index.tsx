import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";

const UserDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-xl font-semibold mt-4 mb-2">Sheharyar Ishfaq</h1>
      <p className="text-label font-medium">
        Joined on {moment().format("MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default UserDetails;
