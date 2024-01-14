import React from "react";
import Image, { StaticImageData } from "next/image";

interface IconCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  className?: string;
}

const IconCard = ({ icon, title, description, className }: IconCardProps) => {
  return (
    <div className={className}>
      <div className="pb-2">
        <Image src={icon} alt={title} />
      </div>
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="text-label font-[500]">{description}</p>
    </div>
  );
};

export default IconCard;
