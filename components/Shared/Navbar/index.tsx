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
  BsBoxArrowRight,
} from "react-icons/bs";
import CustomSearch from "@/components/CustomSearch";
import { BellIcon } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface NavbarProps {
  isDark?: boolean;
  showSearch?: boolean;
}

const Navbar = ({ isDark = false, showSearch = false }: NavbarProps) => {
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
        className={`text-2xl font-bold ${!isDark ? "text-main" : ""} ${
          showSearch ? "text-main" : ""
        }`}
      >
        RestHunt
      </Link>
      {showSearch && (
        <div className="hidden sm:block">
          <CustomSearch isSmall={true} />
        </div>
      )}
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
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none focus:outline-none">
              <button className="relative flex items-center justify-center">
                <BellIcon className="cursor-pointer" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1 text-xs text-white bg-red-500 rounded-full w-2 h-2"></span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-72 max-h-[300px] overflow-y-auto custom-scrollbar"
            >
              <DropdownMenuLabel>
                Notifications <span className="text-xs text-label">(2)</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback className="bg-black text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">
                      John Doe{" "}
                      <span className="text-xs text-label">
                        Booked your property
                      </span>
                    </p>
                    <p className="text-xs text-label">1 hour ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback className="bg-black text-white">
                      KA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">
                      Keanu Reeves{" "}
                      <span className="text-xs text-label">
                        Sent you a message
                      </span>
                    </p>
                    <p className="text-xs text-label">2 hours ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback className="bg-black text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">
                      John Doe{" "}
                      <span className="text-xs text-label">
                        Booked your property
                      </span>
                    </p>
                    <p className="text-xs text-label">1 hour ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback className="bg-black text-white">
                      KA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">
                      Keanu Reeves{" "}
                      <span className="text-xs text-label">
                        Sent you a message
                      </span>
                    </p>
                    <p className="text-xs text-label">2 hours ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback className="bg-black text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">
                      John Doe{" "}
                      <span className="text-xs text-label">
                        Booked your property
                      </span>
                    </p>
                    <p className="text-xs text-label">1 hour ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/images/avatar.png" />
                    <AvatarFallback className="bg-black text-white">
                      KA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">
                      Keanu Reeves{" "}
                      <span className="text-xs text-label">
                        Sent you a message
                      </span>
                    </p>
                    <p className="text-xs text-label">2 hours ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                <Link href="/profile" className="flex items-center">
                  <BsPerson className="mr-2" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/my-bookings" className="flex items-center">
                  <BsCalendar2Check className="mr-2" /> Bookings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/messages" className="flex items-center">
                  <BsChatDots className="mr-2" /> Messages
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/saved-properties" className="flex items-center">
                  <BsHeart className="mr-2" /> Saved Properties
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/recently-viewed" className="flex items-center">
                  <BsArrowClockwise className="mr-2" /> Recently Viewed
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logoutHandler}
                className="text-red-500"
              >
                <BsBoxArrowRight className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
