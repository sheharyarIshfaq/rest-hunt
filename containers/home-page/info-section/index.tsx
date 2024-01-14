import IconCard from "@/components/IconCard";
import React from "react";
import HomeIcon from "@/public/icons/home.svg";
import PriceTagIcon from "@/public/icons/pricetag.svg";
import SupportIcon from "@/public/icons/support.svg";

const DATA = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Perfect Home Guarantee",
    description:
      "Select the best student accommodation, providing safe & cozy living experience",
  },
  {
    id: 2,
    icon: PriceTagIcon,
    title: "Best Price, Every Time",
    description:
      "Rest assured, you won't find a better deal elsewhere except on RestHunt",
  },
  {
    id: 3,
    icon: SupportIcon,
    title: "Always at Your Service",
    description:
      "Get expert advice and service around the clock from our multi-lingual team",
  },
];

const InfoSection = () => {
  return (
    <section className="container grid grid-cols-3 gap-8 py-10">
      {DATA.map((item) => (
        <IconCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default InfoSection;
