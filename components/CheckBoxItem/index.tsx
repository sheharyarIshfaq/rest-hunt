import React from "react";
import { Checkbox } from "../ui/checkbox";

const CheckBoxItem = ({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <label htmlFor={id} className="text-sm mt-[2px] capitalize">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxItem;
