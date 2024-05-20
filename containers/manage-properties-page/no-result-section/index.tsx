import React from "react";
import NoResultImg from "@/public/images/no-properties.svg";
import Image from "next/image";

const NoResultSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-10">
      <Image src={NoResultImg} alt="No Result" className="max-h-[50vh]" />
      <h1 className="text-xl font-semibold mt-2">No properties Listed</h1>
      <p className="text-label">
        List your properties so that people can find you
      </p>
    </div>
  );
};

export default NoResultSection;
