import React from "react";

interface IconButtonProps {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}

const IconButton = ({ icon, title, className = "" }: IconButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-sm font-semibold ${className}`}
    >
      {icon} {title}
    </button>
  );
};

export default IconButton;
