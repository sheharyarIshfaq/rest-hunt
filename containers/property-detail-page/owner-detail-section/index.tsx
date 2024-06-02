import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";
import Link from "next/link";

const OwnerDetailsSection = ({ ownerData }: { ownerData: any }) => {
  return (
    <div className="mt-4 border-b pb-2">
      <Link
        href={`/user/${ownerData?._id}`}
        className="flex items-center gap-3 py-3"
      >
        <Avatar className="w-14 h-14">
          <AvatarImage src={ownerData?.profilePicture} />
          <AvatarFallback>
            {ownerData?.name
              .split(" ")
              .map((name: any) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-semibold">Sheharyar Ishfaq</h1>
          <p className="text-label font-medium">
            Joined on {moment().format("MMMM D, YYYY")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default OwnerDetailsSection;
