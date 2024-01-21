import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import CustomSearch from "@/components/CustomSearch";

const HeroSection = () => {
  return (
    <section className="container py-20">
      <h1 className="text-5xl font-semibold text-center">
        Discover Your <span className="text-white">"Perfect Stay"</span> with
        RestHunt!
      </h1>
      <p className="text-label font-semibold text-2xl mt-6 text-center">
        Seamless Accommodation Search Made Simple.
      </p>
      <div className="hidden sm:flex items-center gap-3 text-label font-semibold justify-center mt-10">
        <div className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-xl text-black" />
          <p>Verified Properties</p>
        </div>
        <div className="flex items-center gap-1">
          <IoPricetagOutline className="text-xl text-black" />
          <p>Price match guarantee</p>
        </div>
        <div className="flex items-center gap-1">
          <BiSupport className="text-xl text-black" />
          <p>24/7 Support</p>
        </div>
      </div>
      <div className="max-w-[80vw] sm:max-w-[50vw] mx-auto mt-14">
        <CustomSearch />
      </div>
    </section>
  );
};

export default HeroSection;
