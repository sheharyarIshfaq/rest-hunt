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
import { useAppDispatch } from "@/redux/store";
import { onLogin } from "@/redux/features/auth-slice";
import moment from "moment";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

enum Tab {
  Signup = "signup",
  Choose = "choose",
  Info = "info",
}

export default function SignupPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Signup);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const backHandler = () => {
    if (activeTab === Tab.Choose) {
      setActiveTab(Tab.Signup);
    } else if (activeTab === Tab.Info) {
      setActiveTab(Tab.Choose);
    }
  };

  const initialSubmitHandler = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
    setActiveTab(Tab.Choose);
  };

  const chooseSubmitHandler = (role: string) => {
    setRole(role);
    setActiveTab(Tab.Info);
  };

  const submitFormHandler = async (
    name: string,
    gender: string,
    location: string
  ) => {
    const data = {
      email,
      password,
      role,
      name,
      gender,
      location,
    };

    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (responseData.error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
      }
      const { user, token, expiresAt } = responseData;
      dispatch(onLogin({ user, token, expiresAt }));
      router.push("/");
    } catch (err) {
    } finally {
      setLoading(false);
    }
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
        <SignupForm onInitialSubmit={initialSubmitHandler} />
      )}
      {activeTab === Tab.Choose && (
        <ChooseSection onSubmit={chooseSubmitHandler} />
      )}
      {activeTab === Tab.Info && (
        <InfoForm onInfoSubmit={submitFormHandler} loading={loading} />
      )}
    </div>
  );
}
