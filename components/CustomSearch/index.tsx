"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface CustomSearchProps {
  isSmall?: boolean;
  className?: string;
}

const CustomSearch = ({
  isSmall = false,
  className = "",
}: CustomSearchProps) => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    if (search.trim() === "") return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      className={`flex items-center justify-between ${
        isSmall
          ? "bg-transparent border border-gray-300 rounded-md w-[400px]"
          : "bg-white shadow-md"
      } ${className}`}
      onSubmit={searchHandler}
    >
      <input
        type="text"
        placeholder="Find your ideal stay in the city you love..."
        className={`bg-transparent outline-none flex-1 px-6 ${
          isSmall ? "py-2" : "py-4"
        }`}
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className={`flex items-center justify-center bg-main text-2xl text-white ${
          isSmall ? "h-10 w-10 rounded-r-md" : "h-14 w-16"
        }`}
      >
        <BsSearch className={`${isSmall ? "text-[18px]" : ""}`} />
      </button>
    </form>
  );
};

export default CustomSearch;
