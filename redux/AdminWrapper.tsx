"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "./store";
import { useRouter } from "next/navigation";
import SyncLoader from "react-spinners/SyncLoader";

const AdminWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (!user || user?.role !== "admin") {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [user]);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <SyncLoader color="#34C759" />
    </div>
  ) : (
    <>{children}</>
  );
};

export default AdminWrapper;
