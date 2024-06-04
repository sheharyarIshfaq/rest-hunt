import moment from "moment";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const UserDetails = ({ userData }: { userData: any }) => {
  return (
    <div className="flex-1">
      <h1 className="text-lg font-semibold">About {userData?.name}</h1>
      <div className="my-4 flex flex-col gap-4">
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-label">From</h1>
          <p className="font-medium">{userData?.location}, Pakistan</p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-label">On RestHunt since</h1>
          <p className="font-medium">
            {moment(userData?.createdAt).format("Do MMM, YYYY")}
          </p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-label">Rating</h1>
          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <BsStarFill className="text-black" />
            {userData?.averageRating || 0} ({userData?.reviewsCount || 0})
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
