import React from "react";
import UserIcon from "@/public/icons/user.svg";
import OwnerIcon from "@/public/icons/owner.svg";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ChooseCard = ({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: StaticImageData;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 border border-gray-300 rounded-lg p-4 w-full xs:w-48 h-28 xs:h-48 cursor-pointer transition-all duration-200 ease-in hover:bg-mainLight"
      onClick={onClick}
    >
      <img
        src={icon.src}
        alt={title}
        className="w-[40px] xs:w-[60px] h-[40px] xs:h-[60px]"
      />
      <p className="text-xl font-semibold">{title}</p>
    </div>
  );
};

interface ChooseSectionProps {
  onSubmit: (role: string) => void;
}

const ChooseSection = ({ onSubmit }: ChooseSectionProps) => {
  const [value, setValue] = React.useState("user");
  return (
    <section className="container py-10 xs:py-20 w-fit">
      <h1 className="text-3xl font-semibold text-center">Please Choose</h1>
      <p className="my-4 text-center">Please choose how you want to sign up</p>
      <RadioGroup
        defaultValue={value}
        className="flex flex-col xs:flex-row gap-8 justify-center items-center mt-10"
        value={value}
      >
        <div className="relative w-full">
          <ChooseCard
            title="As a User"
            icon={UserIcon}
            onClick={() => {
              setValue("user");
            }}
          />
          <RadioGroupItem
            value="user"
            id="user"
            className="absolute top-3 right-3"
            onClick={() => setValue("user")}
          />
        </div>
        <div className="relative w-full">
          <ChooseCard
            title="As an Owner"
            icon={OwnerIcon}
            onClick={() => setValue("property_owner")}
          />
          <RadioGroupItem
            value="property_owner"
            id="property_owner"
            className="absolute top-3 right-3"
            onClick={() => setValue("property_owner")}
          />
        </div>
      </RadioGroup>
      <Button
        className="bg-main hover:bg-mainLight hover:text-black mt-10 w-full"
        onClick={() => onSubmit(value)}
      >
        Next
      </Button>
    </section>
  );
};

export default ChooseSection;
