import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center gap-4 py-4">
      <Link href="/" className="text-2xl font-bold">
        RestHunt
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
