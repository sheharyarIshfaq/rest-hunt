"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/store";
import { onLogout } from "@/redux/features/auth-slice";

const LinkItem = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`py-2 px-4 rounded-md ${isActive ? "bg-white" : ""}`}
    >
      {children}
    </Link>
  );
};

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(onLogout());
    router.push("/");
  };

  return (
    <div className="w-64 bg-mainLight p-4 rounded-md min-h-[80vh] flex flex-col justify-between">
      <div>
        <h1 className="text-lg font-semibold">Admin Controls</h1>
        <div className="flex flex-col gap-4 py-4">
          <LinkItem href="/admin" isActive={pathname === "/admin"}>
            Dashboard
          </LinkItem>
          <LinkItem href="/admin/users" isActive={pathname === "/admin/users"}>
            Users
          </LinkItem>
          <LinkItem
            href="/admin/properties"
            isActive={pathname === "/admin/properties"}
          >
            Properties
          </LinkItem>
          <LinkItem
            href="/admin/bookings"
            isActive={pathname === "/admin/bookings"}
          >
            Bookings
          </LinkItem>
          <LinkItem
            href="/admin/withdrawals"
            isActive={pathname === "/admin/withdrawals"}
          >
            Withdrawals
          </LinkItem>
        </div>
      </div>
      <Button className="w-full" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default AdminSidebar;
