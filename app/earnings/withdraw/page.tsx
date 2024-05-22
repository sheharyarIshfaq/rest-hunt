import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const WithDrawBalancePage = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/earnings">My Earnings</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Withdraw Balance</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Withdraw Balance</h1>
        <div className="mt-6 flex items-center flex-col">
          <div className="text-center">
            <h3 className="font-medium text-label">
              Amount available for withdraw
            </h3>
            <h1 className="text-2xl font-bold my-1">Rs. 34999</h1>
          </div>
          <div className="min-w-[40vw] my-8 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="payment-method" className="font-semibold">
                Select your payout method
              </Label>
              <Select>
                <SelectTrigger id="payment-method">
                  <SelectValue placeholder="Choose payment method for withdrawal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="jazz-cash">Jazz Cash</SelectItem>
                  <SelectItem value="easy-paisa">Easy Paisa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="amount" className="font-semibold">
                Enter amount to withdraw
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount to withdraw"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="account-number" className="font-semibold">
                Enter account details
              </Label>
              <Textarea
                id="account-number"
                placeholder="Enter account details, account number, account name, etc."
              />
            </div>
            <Button>Withdraw Balance</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithDrawBalancePage;
