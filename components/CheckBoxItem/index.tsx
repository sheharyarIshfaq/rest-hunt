import React from "react";
import { Checkbox } from "../ui/checkbox";

const CheckBoxItem = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label htmlFor={id} className="text-sm mt-[2px]">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxItem;
