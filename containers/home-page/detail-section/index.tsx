import React from "react";
import IconCard from "@/components/IconCard";
import PropertyIcon from "@/public/icons/property.svg";
import EducationIcon from "@/public/icons/education.svg";
import CityIcon from "@/public/icons/city.svg";

const DATA = [
  {
    id: 1,
    icon: PropertyIcon,
    title: "50,000+ Properties",
    description:
      "Select the best student accommodation, providing safe & cozy living experience",
  },
  {
    id: 2,
    icon: EducationIcon,
    title: "500+ Universities",
    description:
      "Find the best choice of accommodation close to your university",
  },
  {
    id: 3,
    icon: CityIcon,
    title: "200+ Cities",
    description:
      "Explore student life around the country with our unique neighborhood guides.",
  },
];

const DetailSection = () => {
  return (
    <section className="bg-mainLight py-14">
      <div className="container">
        <h1 className="text-3xl font-semibold text-center">What We've Got</h1>
        <div className="grid sm:grid-cols-3 gap-8 mt-14">
          {DATA.map((item) => (
            <IconCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
