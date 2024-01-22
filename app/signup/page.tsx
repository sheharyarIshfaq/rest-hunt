"use client";
import { useState } from "react";
import Navbar from "@/components/Shared/Navbar";
import SignupForm from "@/containers/signup-page/signup-form";
import ChooseSection from "@/containers/signup-page/choose-section";
import InfoForm from "@/containers/signup-page/info-form";
import { Button } from "@/components/ui/button";
import { BsChevronLeft } from "react-icons/bs";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

enum Tab {
  Signup = "signup",
  Choose = "choose",
  Info = "info",
}

export default function SignupPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Signup);

  const backHandler = () => {
    if (activeTab === Tab.Choose) {
      setActiveTab(Tab.Signup);
    } else if (activeTab === Tab.Info) {
      setActiveTab(Tab.Choose);
    }
  };

  const submitFormHandler = () => {
    toast({
      variant: "success",
      title: "Signup Successful",
      description: "You have successfully signed up",
    });
    router.push("/");
  };

  return (
    <div
      className={`h-screen flex flex-col ${
        activeTab !== Tab.Signup && "show-graphics"
      }`}
    >
      {activeTab === Tab.Signup && <Navbar />}
      {(activeTab === Tab.Choose || activeTab === Tab.Info) && (
        <nav className="container py-4">
          <Button
            onClick={backHandler}
            className="bg-gray-200 hover:bg-gray-300 text-black"
          >
            <BsChevronLeft className="mr-1 -ml-2" />
            Back
          </Button>
        </nav>
      )}
      {activeTab === Tab.Signup && (
        <SignupForm onSubmit={() => setActiveTab(Tab.Choose)} />
      )}
      {activeTab === Tab.Choose && (
        <ChooseSection onSubmit={() => setActiveTab(Tab.Info)} />
      )}
      {activeTab === Tab.Info && <InfoForm onSubmit={submitFormHandler} />}
    </div>
  );
}
