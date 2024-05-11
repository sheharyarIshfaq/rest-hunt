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

const UserInfoSection = () => {
  const [onEditName, setOnEditName] = React.useState(false);
  const [onEditEmail, setOnEditEmail] = React.useState(false);
  const [onEditPhone, setOnEditPhone] = React.useState(false);
  const [onEditAddress, setOnEditAddress] = React.useState(false);

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
                  onClick={() => setOnEditName(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => setOnEditName(false)}
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
                  onClick={() => setOnEditEmail(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => setOnEditEmail(false)}
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
                  onClick={() => setOnEditPhone(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => setOnEditPhone(false)}
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
                  onClick={() => setOnEditAddress(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-sm text-main"
                  onClick={() => setOnEditAddress(false)}
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
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoSection;
