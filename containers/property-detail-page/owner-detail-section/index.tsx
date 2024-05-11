import React from "react";
import IconButton from "@/components/Shared/IconButton";
import { IoLocationSharp } from "react-icons/io5";
import { FaWalking, FaCar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";
import Link from "next/link";

const OwnerDetailsSection = () => {
  return (
    <div className="mt-4 border-b pb-2">
      <Link href="/user/2" className="flex items-center gap-3 py-3">
        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
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
