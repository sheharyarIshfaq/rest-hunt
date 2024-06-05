import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";

const UserDetails = ({
  image,
  name,
  createdAt,
}: {
  image: string;
  name: string;
  createdAt: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <Avatar className="w-24 h-24">
        <AvatarImage src={image} />
        <AvatarFallback>
          {name
            ?.split(" ")
            ?.map((n: any) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h1 className="text-xl font-semibold mt-4 mb-2">{name}</h1>
      <p className="text-label font-medium">
        Joined on {moment(createdAt).format("MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default UserDetails;
