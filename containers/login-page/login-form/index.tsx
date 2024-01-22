import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginImage from "@/public/images/login.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/icons/google.svg";
import Link from "next/link";

const LoginForm = () => {
  return (
    <section className="container flex justify-center lg:justify-between items-center gap-8 flex-1 md:max-w-[85vw]">
      <div className="flex-1 md:max-w-[60vw] lg:max-w-full">
        <h1 className="text-3xl font-semibold text-center">Hi there!</h1>
        <p className="my-4 text-center">
          Welcome back, great to see you here again
        </p>
        <Tabs defaultValue="user">
          <TabsList className="my-3 w-full">
            <TabsTrigger className="w-full" value="user">
              User Login
            </TabsTrigger>
            <TabsTrigger className="w-full" value="owner">
              Property Owner Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="user" className="flex flex-col gap-3">
            <Input type="email" placeholder="Enter your Email" />
            <Input type="password" placeholder="Enter your password" />
            <p className="text-right underline">Forgot Password?</p>
            <Button className="bg-main hover:bg-mainLight hover:text-black">
              Login
            </Button>
            <div className="flex items-center gap-2">
              <hr className="flex-1" />
              <p className="text-muted-foreground">or</p>
              <hr className="flex-1" />
            </div>
            <Button className="bg-white border border-black text-black hover:text-white">
              <Image
                src={GoogleIcon}
                alt="Google"
                className="mr-2 w-[18px] h-[18px]"
              />
              Login with Google
            </Button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-main font-semibold">
                Sign Up
              </Link>
            </p>
          </TabsContent>
          <TabsContent value="owner" className="flex flex-col gap-3">
            <Input type="email" placeholder="Enter your Email" />
            <Input type="password" placeholder="Enter your password" />
            <p className="text-right underline">Forgot Password?</p>
            <Button className="bg-main hover:bg-mainLight hover:text-black">
              Login
            </Button>
            <div className="flex items-center gap-2">
              <hr className="flex-1" />
              <p className="text-muted-foreground">or</p>
              <hr className="flex-1" />
            </div>
            <Button className="bg-white border border-black text-black hover:text-white">
              <Image
                src={GoogleIcon}
                alt="Google"
                className="mr-2 w-[18px] h-[18px]"
              />
              Login with Google
            </Button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-main font-semibold">
                Sign Up
              </Link>
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex-1 hidden lg:flex justify-end">
        <Image src={LoginImage} alt="Login Image" />
      </div>
    </section>
  );
};

export default LoginForm;
