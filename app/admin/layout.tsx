import AdminSidebar from "@/containers/admin-page/admin-sidebar";
import AdminWrapper from "@/redux/AdminWrapper";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminWrapper>
      <div className="bg-mainLight p-4">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
      </div>
      <div className="flex gap-4 py-10 px-6">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </AdminWrapper>
  );
}
