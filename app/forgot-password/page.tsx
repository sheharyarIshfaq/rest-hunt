"use client";
import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import ForgotPasswordForm from "@/containers/forgot-password-page/forgot-password-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import VerificationForm from "@/containers/forgot-password-page/verification-form";
import ResetPasswordForm from "@/containers/forgot-password-page/reset-password-form";

enum Tab {
  ForgotPassword = "forgot-password",
  Verification = "verification",
  ResetPassword = "reset-password",
}

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ForgotPassword);

  const backHandler = () => {
    if (activeTab === Tab.ForgotPassword) {
      router.push("/login");
    } else if (activeTab === Tab.Verification) {
      setActiveTab(Tab.ForgotPassword);
    } else {
      setActiveTab(Tab.Verification);
    }
  };

  return (
    <div className="h-screen flex flex-col show-graphics">
      <nav className="container py-4">
        <Button
          onClick={backHandler}
          className="bg-gray-200 hover:bg-gray-300 text-black"
        >
          <BsChevronLeft className="mr-1 -ml-2" />
          Back
        </Button>
      </nav>
      {activeTab === Tab.ForgotPassword && (
        <ForgotPasswordForm
          onSendVerificationCode={(email: string) => {
            setEmail(email);
            setActiveTab(Tab.Verification);
          }}
        />
      )}
      {activeTab === Tab.Verification && (
        <VerificationForm
          onVerifySuccess={(code: string) => {
            setActiveTab(Tab.ResetPassword);
            setCode(code);
          }}
        />
      )}
      {activeTab === Tab.ResetPassword && (
        <ResetPasswordForm email={email} code={code} />
      )}
    </div>
  );
};

export default ForgotPasswordPage;
