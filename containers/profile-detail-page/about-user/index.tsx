import React from "react";
import { BsMailbox } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const AboutUser = ({ address, email }: { address: string; email: string }) => {
  return (
    <div className="flex flex-col gap-4 my-8">
      <div className="flex items-center gap-1 text-label font-medium">
        <IoLocationOutline className="text-lg" />
        <p>
          From{" "}
          <span className="text-black font-semibold">{address}, Pakistan</span>
        </p>
      </div>
      <div className="flex items-center gap-1 text-label font-medium">
        <BsMailbox className="text-lg" />
        <p>
          Email <span className="text-black font-semibold">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUser;
