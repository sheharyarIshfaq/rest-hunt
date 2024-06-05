"use client";
import { useRouter, useSearchParams } from "next/navigation";
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
  const [firstTime, setFirstTime] = React.useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("query") || "";

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") {
      return router.push(`/search`);
    }
    router.push(`/search?query=${search}`);
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
        value={search === "" && firstTime ? searchValue : search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (firstTime) {
            setFirstTime(false);
          }
        }}
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
