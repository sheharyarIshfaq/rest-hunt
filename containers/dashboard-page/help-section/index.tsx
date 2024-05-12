import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HelpSection = () => {
  return (
    <div
      className="bg-mainLight bg-opacity-55 p-8 rounded-md"
      id="help-section"
    >
      <h1 className="text-2xl font-semibold">Need help for listing?</h1>
      <div className="mt-3 flex gap-6 items-center">
        <p className="text-label text-lg font-medium">
          Check out the help section for listing if you need help to list your
          property
        </p>
        <button>
          <BsArrowRight className="text-3xl font-bold" />
        </button>
      </div>
    </div>
  );
};

export default HelpSection;
