import React from "react";
import Image from "next/image";
import SignupImage from "@/public/images/login.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/icons/google.svg";
import Link from "next/link";

interface SignupFormProps {
  onSubmit: () => void;
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  return (
    <section className="container flex justify-center lg:justify-between items-center gap-8 flex-1 md:max-w-[85vw]">
      <div className="flex-1 md:max-w-[60vw] lg:max-w-full">
        <h1 className="text-3xl font-semibold text-center">Hi there!</h1>
        <p className="my-4 text-center">
          Welcome to RestHunt, the land of Perfect Stay
        </p>
        <div className="flex flex-col gap-3">
          <Input type="email" placeholder="Enter your Email" />
          <Input type="password" placeholder="Enter your password" />
          <p className="text-left text-label my-1 text-sm underline">
            Password should be 8 digits long or more
          </p>
          <Button
            className="bg-main hover:bg-mainLight hover:text-black"
            onClick={onSubmit}
          >
            Signup
          </Button>
          <div className="flex items-center gap-2">
            <hr className="flex-1" />
            <p className="text-muted-foreground">or</p>
            <hr className="flex-1" />
          </div>
          <Button
            className="bg-white border border-black text-black hover:text-white"
            onClick={onSubmit}
          >
            <Image
              src={GoogleIcon}
              alt="Google"
              className="mr-2 w-[18px] h-[18px]"
            />
            Signup with Google
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-main font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="flex-1 hidden lg:flex justify-end">
        <Image src={SignupImage} alt="Signup Image" />
      </div>
    </section>
  );
};

export default SignupForm;
