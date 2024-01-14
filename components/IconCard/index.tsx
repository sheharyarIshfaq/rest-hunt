import React from "react";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconCard = ({ icon, title, description }: IconCardProps) => {
  return (
    <div>
      <div className="text-5xl">{icon}</div>
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="text-label font-[500]">{description}</p>
    </div>
  );
};

export default IconCard;
