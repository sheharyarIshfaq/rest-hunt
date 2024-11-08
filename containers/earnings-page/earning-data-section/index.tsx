"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { BsChevronRight } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const EarningsDataSection = ({
  totalEarnings,
  withdrawnAmount,
  pendingWithdrawal,
}: {
  totalEarnings: number;
  withdrawnAmount: number;
  pendingWithdrawal: number;
}) => {
  const router = useRouter();
  const [selected, setSelected] = React.useState("till-date");

  return (
    <div className="grid md:grid-cols-3 gap-3 md:gap-6 items-stretch">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">Available Funds</h1>
        <div className="border-[1.5px] p-6 rounded-md my-3 flex-grow flex flex-col">
          <h3 className="font-semibold text-label">
            Balance available for use
          </h3>
          <h1 className="text-xl sm:text-3xl font-bold my-3">
            Rs. {totalEarnings - withdrawnAmount - pendingWithdrawal}
          </h1>
          <Button
            className="mt-auto bg-main"
            onClick={() => router.push("/earnings/withdraw")}
          >
            Withdraw Balance
            <BsChevronRight className="ml-1 text-lg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">Future Payments</h1>
        <div className="border-[1.5px] p-6 rounded-md my-3 flex-grow flex flex-col">
          <h3 className="font-semibold text-label">Withdraws in progress</h3>
          <h1 className="text-xl sm:text-3xl font-bold my-3">
            Rs. {pendingWithdrawal}
          </h1>
          <Separator />
          <h3 className="font-semibold text-label mt-3">
            Total Withdrawn Amount
          </h3>
          <h1 className="text-xl sm:text-3xl font-bold my-3">
            Rs. {withdrawnAmount}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3 justify-between">
          <h1 className="text-lg font-semibold">Earnings</h1>
          <Select
            value={selected}
            onValueChange={(value) => setSelected(value)}
          >
            <SelectTrigger className="w-[180px] border-0 h-0 focus:ring-0 focus:ring-transparent">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="till-date">Earnings till date</SelectItem>
              <SelectItem value="this-month">Earnings this Month</SelectItem>
              <SelectItem value="this-year">Earnings this Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border-[1.5px] p-6 rounded-md my-3 flex-grow flex flex-col">
          <h3 className="font-semibold text-label">
            Earnings{" "}
            {selected === "till-date"
              ? "till date"
              : selected === "this-month"
              ? "this month"
              : "this year"}
          </h3>
          <h1 className="text-xl sm:text-3xl font-bold my-3">
            Rs. {totalEarnings}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EarningsDataSection;
