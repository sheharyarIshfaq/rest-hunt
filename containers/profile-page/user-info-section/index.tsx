"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { BsPencil, BsInfoCircle } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toast } from "@/components/ui/use-toast";
import { onUpdateUser } from "@/redux/features/auth-slice";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const UserInfoSection = () => {
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);

  const [onEditName, setOnEditName] = React.useState(false);
  const [onEditEmail, setOnEditEmail] = React.useState(false);
  const [onEditPhone, setOnEditPhone] = React.useState(false);
  const [onEditAddress, setOnEditAddress] = React.useState(false);

  const [name, setName] = React.useState(user?.name || "");
  const [email, setEmail] = React.useState(user?.email || "");
  const [phone, setPhone] = React.useState(user?.phoneNumber || "");
  const [address, setAddress] = React.useState(user?.location || "");

  const setInitialValues = () => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phoneNumber || "");
    setAddress(user?.location || "");
  };

  const updateUserHandler = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber: phone,
          location: address,
        }),
      });
      const responseData = await response.json();
      if (responseData.error) {
        setInitialValues();
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
      }
      const { user } = responseData;
      dispatch(onUpdateUser(user));
    } catch (err: any) {
      setInitialValues();
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: err.message,
      });
    }
  };

  return (
    <div className="my-10">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 my-4 sm:my-6">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2 px-1">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            {!onEditName && (
              <button
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setOnEditName(true)}
              >
                <BsPencil />
                <span className="">Edit</span>
              </button>
            )}
            {onEditName && (
              <div className="flex items-center gap-2 font-medium">
                <button
                  className="text-sm"
                  onClick={() => {
                    setName(user?.name || "");
                    setOnEditName(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => {
                    setOnEditName(false);
                    updateUserHandler();
                  }}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          <Input
            type="text"
            placeholder="Name"
            required
            className={onEditName ? "border-main" : ""}
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!onEditName}
          />
        </div>
        <div>
          <div className="flex items-center justify-between gap-4 mb-2 px-1">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            {!onEditEmail && (
              <button
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setOnEditEmail(true)}
              >
                <BsPencil />
                <span className="">Edit</span>
              </button>
            )}
            {onEditEmail && (
              <div className="flex items-center gap-2 font-medium">
                <button
                  className="text-sm"
                  onClick={() => {
                    setEmail(user?.email || "");
                    setOnEditEmail(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => {
                    setOnEditEmail(false);
                    updateUserHandler();
                  }}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          <Input
            type="email"
            placeholder="Email"
            required
            className={onEditEmail ? "border-main" : ""}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!onEditEmail}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 my-4 sm:my-6">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2 px-1">
            <div className="flex items-center gap-2">
              <label className="font-medium" htmlFor="phone-number">
                Phone Number
              </label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BsInfoCircle className="text-sm text-label" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-[200px]">
                      Adding mobile number will increase your account security
                      for backup, incase you lost your email address
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {!onEditPhone && (
              <button
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setOnEditPhone(true)}
              >
                <BsPencil />
                <span className="">Edit</span>
              </button>
            )}
            {onEditPhone && (
              <div className="flex items-center gap-2 font-medium">
                <button
                  className="text-sm"
                  onClick={() => {
                    setPhone(user?.phoneNumber || "");
                    setOnEditPhone(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => {
                    setOnEditPhone(false);
                    updateUserHandler();
                  }}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          <Input
            type="text"
            placeholder="Phone Number"
            required
            className={onEditPhone ? "border-main" : ""}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            readOnly={!onEditPhone}
          />
        </div>
        <div>
          <div className="flex items-center justify-between gap-4 mb-2 px-1">
            <div className="flex items-center gap-2">
              <label className="font-medium" htmlFor="address">
                Address
              </label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BsInfoCircle className="text-sm text-label" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-[200px]">
                      Adding address will help us in creating personalize
                      suggestions according to your address.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {!onEditAddress && (
              <button
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setOnEditAddress(true)}
              >
                <BsPencil />
                <span className="">Edit</span>
              </button>
            )}
            {onEditAddress && (
              <div className="flex items-center gap-2 font-medium">
                <button
                  className="text-sm"
                  onClick={() => {
                    setAddress(user?.location || "");
                    setOnEditAddress(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => {
                    setOnEditAddress(false);
                    updateUserHandler();
                  }}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          <Input
            type="text"
            placeholder="Address"
            required
            className={onEditAddress ? "border-main" : ""}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            readOnly={!onEditAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoSection;
