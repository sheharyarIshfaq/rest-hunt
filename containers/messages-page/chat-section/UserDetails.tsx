import React from "react";
import { BsStarFill } from "react-icons/bs";

const UserDetails = () => {
  return (
    <div className="flex-1">
      <h1 className="text-lg font-semibold">About Sheharyar</h1>
      <div className="my-4 flex flex-col gap-4">
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-label">From</h1>
          <p className="font-medium">Islamabad, Pakistan</p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-label">On RestHunt since</h1>
          <p className="font-medium">Feb,23</p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-label">Rating</h1>
          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <BsStarFill className="text-black" />
            4.5 (20)
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
