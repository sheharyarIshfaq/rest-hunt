import React from "react";
import { BsChevronRight } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PropertyDescriptionSection = () => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Description</h1>
      <p className="text-label my-3">
        Physical space is often conceived in three linear dimensions, although
        modern physicists usually con Physical space is often conceived in three
        linear dimensions, although modern physicists usually con Physical space
        is often conceived in three linear dimensions, although modern
        physicists usually con Physical space.
      </p>
      <Dialog>
        <DialogTrigger>
          <button className="flex items-center gap-2 font-semibold">
            View full description <BsChevronRight />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[70vw]">
          <DialogHeader>
            <DialogTitle>Description</DialogTitle>
            <DialogDescription className="pt-2 pr-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
              Physical space is often conceived in three linear dimensions,
              although modern physicists usually con Physical space is often
              conceived in three linear dimensions, although modern physicists
              usually con Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space. Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space. Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.Physical space is often conceived in three linear
              dimensions, although modern physicists usually con Physical space
              is often conceived in three linear dimensions, although modern
              physicists usually con Physical space is often conceived in three
              linear dimensions, although modern physicists usually con Physical
              space.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyDescriptionSection;
