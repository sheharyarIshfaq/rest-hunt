"use client";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginImage from "@/public/images/login.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/icons/google.svg";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

// Yup schema to validate the form
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

const DataForm = () => {
  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email, password }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your Email"
        value={values.email}
        onChange={handleChange}
        id="email"
        name="email"
        error={errors.email && touched.email ? true : false}
      />
      {errors.email && touched.email && (
        <span className="text-sm text-red-500 ml-1 capitalize">
          {errors.email}
        </span>
      )}
      <Input
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        id="password"
        name="password"
        error={errors.password && touched.password ? true : false}
      />
      {errors.password && touched.password && (
        <span className="text-sm text-red-500 ml-1 capitalize">
          {errors.password}
        </span>
      )}
      <p className="text-right underline">Forgot Password?</p>
      <Button
        className="bg-main hover:bg-mainLight hover:text-black"
        type="submit"
      >
        Login
      </Button>
      <div className="flex items-center gap-2">
        <hr className="flex-1" />
        <p className="text-muted-foreground">or</p>
        <hr className="flex-1" />
      </div>
      <Button
        className="bg-white border border-black text-black hover:text-white"
        type="button"
      >
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
    </form>
  );
};

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
          <TabsContent value="user">
            <DataForm />
          </TabsContent>
          <TabsContent value="owner">
            <DataForm />
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
