"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ControlItemProps {
  title: string;
  description: string;
  buttonText: string;
  url: string;
}

const ControlItem = ({
  title,
  description,
  buttonText,
  url,
}: ControlItemProps) => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 p-6 rounded-md">
      <h1 className="text-black font-semibold text-xl">{title}</h1>
      <p className="my-4">{description}</p>
      <Button
        variant="outline"
        className="bg-transparent border-label text-label font-semibold rounded-3xl"
        onClick={() => router.push(url)}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const DATA = [
  {
    id: 1,
    title: "Promote your properties",
    description: "Get discovered by potential users",
    buttonText: "Share Properties",
    url: "/manage-properties",
  },
  {
    id: 2,
    title: "Listed properties",
    description: "You've listed 4 properties",
    buttonText: "See properties",
    url: "/manage-properties",
  },
  {
    id: 3,
    title: "Your earnings",
    description: "Check out your earnings",
    buttonText: "Check Earning",
    url: "/earnings",
  },
  {
    id: 4,
    title: "Booked properties",
    description: "Booked properties are decreasing ",
    buttonText: "Check Bookings",
    url: "/my-bookings",
  },
];

const ControlsSection = () => {
  return (
    <div className="flex-[2.5] grid xs:grid-cols-2 gap-6">
      {DATA.map((item) => (
        <ControlItem
          key={item.id}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default ControlsSection;
