import React from "react";
import NoResultImg from "@/public/images/empty.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NoResultSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image src={NoResultImg} alt="No Result" className="max-h-[50vh]" />
      <h1 className="text-xl font-semibold mt-2">No saved properties </h1>
      <p className="my-2 text-label">
        Save properties to shortlist them by clicking on the heart icon
      </p>
      <Button className="bg-main font-semibold">
        <Link href="/search">Explore Properties</Link>
      </Button>
    </div>
  );
};

export default NoResultSection;
