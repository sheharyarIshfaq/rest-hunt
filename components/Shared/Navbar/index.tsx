"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface NavbarProps {
  isDark?: boolean;
}

const Navbar = ({ isDark = false }: NavbarProps) => {
  const router = useRouter();
  return (
    <nav className="container flex justify-between items-center gap-4 py-4">
      <Link
        href="/"
        className={`text-2xl font-bold ${!isDark ? "text-main" : ""}`}
      >
        RestHunt
      </Link>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() => router.push("/login")}
          className={`${
            !isDark ? "bg-main text-white hover:bg-mainLight" : ""
          }`}
        >
          Login
        </Button>
        <Button
          onClick={() => router.push("/signup")}
          className={`${
            !isDark
              ? "bg-transparent border border-black text-black hover:text-white"
              : ""
          }`}
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
