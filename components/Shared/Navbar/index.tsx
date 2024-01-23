"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { onLogout } from "@/redux/features/auth-slice";
import {
  BsPerson,
  BsCalendar2Check,
  BsChatDots,
  BsHeart,
  BsArrowClockwise,
  BsGear,
  BsBoxArrowRight,
} from "react-icons/bs";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface NavbarProps {
  isDark?: boolean;
}

const Navbar = ({ isDark = false }: NavbarProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(onLogout());
  };

  return (
    <nav className="container flex justify-between items-center gap-4 py-4">
      <Link
        href="/"
        className={`text-2xl font-bold ${!isDark ? "text-main" : ""}`}
      >
        RestHunt
      </Link>
      {!isLoggedIn && (
        <div className="flex items-center gap-1 xs:gap-3">
          <Button
            variant={isDark ? "outline" : "default"}
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
      )}
      {isLoggedIn && (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none focus:outline-none">
            <Avatar className="cursor-pointer">
              <AvatarImage src={BACKEND_URL + user.profilePicture} />
              <AvatarFallback className="bg-black text-white">
                {user.name
                  .split(" ")
                  .map((name: string) => name[0])
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <BsPerson className="mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsCalendar2Check className="mr-2" /> Bookings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsChatDots className="mr-2" /> Messages
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsHeart className="mr-2" /> Saved Properties
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsArrowClockwise className="mr-2" /> Recently Viewed
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsGear className="mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logoutHandler} className="text-red-500">
              <BsBoxArrowRight className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default Navbar;
