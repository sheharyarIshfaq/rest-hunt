import React from "react";
import { IoLocationOutline, IoEyeOutline } from "react-icons/io5";

const AboutUser = () => {
  return (
    <div className="flex flex-col gap-4 my-8">
      <div className="flex items-center gap-1 text-label font-medium">
        <IoLocationOutline className="text-lg" />
        <p>
          From <span className="text-black font-semibold">Rawalpindi</span>
        </p>
      </div>
      <div className="flex items-center gap-1 text-label font-medium">
        <IoEyeOutline className="text-lg" />
        <p>
          Last seen{" "}
          <span className="text-black font-semibold">2 hours ago</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUser;
