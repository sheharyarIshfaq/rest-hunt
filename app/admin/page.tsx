import React from "react";

const AdminPage = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl font-semibold text-center">Admin Page</h1>
      <p className="text-lg text-center">
        You are logged in as an admin. You can manage users and properties here.
      </p>
      <p>Use the sidebar to navigate between different admin pages.</p>
    </div>
  );
};

export default AdminPage;
