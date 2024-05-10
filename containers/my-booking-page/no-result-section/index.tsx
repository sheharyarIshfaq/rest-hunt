import React from "react";
import NoResultImg from "@/public/images/empty.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NoResultSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image src={NoResultImg} alt="No Result" />
      <h1 className="text-xl font-semibold mt-2">No properties booked</h1>
      <p className="my-2 text-label">
        Find you home away from home by clicking on the button below before it
        is too late...
      </p>
      <Button className="bg-main font-semibold">
        <Link href="/search">Explore Properties</Link>
      </Button>
    </div>
  );
};

export default NoResultSection;
