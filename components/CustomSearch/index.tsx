import React from "react";
import { BsSearch } from "react-icons/bs";

const CustomSearch = () => {
  return (
    <div className="bg-white flex items-center justify-between shadow-md">
      <input
        type="text"
        placeholder="Find your ideal stay in the city you love..."
        className="bg-transparent outline-none flex-1 py-4 px-6"
      />
      <button className="w-16 h-14 flex items-center justify-center bg-main text-2xl text-white">
        <BsSearch />
      </button>
    </div>
  );
};

export default CustomSearch;