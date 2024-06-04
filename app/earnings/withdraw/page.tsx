"use client";
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import ConfirmGif from "@/public/images/confirm.gif";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import { toast } from "@/components/ui/use-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const WithDrawBalancePage = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);

  const [totalEarnings, setTotalEarnings] = React.useState(0);
  const [withdrawnAmount, setWithdrawnAmount] = React.useState(0);
  const [pendingWithdrawal, setPendingWithdrawal] = React.useState(0);

  const [payoutMethod, setPayoutMethod] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [accountDetails, setAccountDetails] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const fetchEarnings = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/earnings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      setTotalEarnings(data.totalEarnings);
      setWithdrawnAmount(data.withdrawnAmount);
      setPendingWithdrawal(data.pendingAmount);
    } catch (error) {
      console.log(error);
    }
  };

  const withdrawBalanceHandler = async () => {
    //if no payout method is selected, show error
    if (!payoutMethod) {
      toast({
        variant: "destructive",
        title: "Withdrawal Failed",
        description: "Please select a payout method",
      });
      return;
    }
    //if no amount is entered, show error
    if (!amount) {
      toast({
        variant: "destructive",
        title: "Withdrawal Failed",
        description: "Please enter an amount",
      });
      return;
    }
    //if no account details are entered, show error
    if (!accountDetails || accountDetails.trim().length === 0) {
      toast({
        variant: "destructive",
        title: "Withdrawal Failed",
        description: "Please enter account details",
      });
      return;
    }
    //check if amount is greater than available balance
    if (amount > totalEarnings - withdrawnAmount) {
      toast({
        variant: "destructive",
        title: "Withdrawal Failed",
        description: "Amount is greater than available balance",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/withdrawals/request`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          amount,
          payoutMethod,
          accountDetails,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setIsDialogOpen(true);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Withdrawal Failed",
        description: "Failed to withdraw balance",
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchEarnings();
  }, []);

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
            <h1 className="text-2xl font-bold my-1">
              Rs. {totalEarnings - withdrawnAmount - pendingWithdrawal}
            </h1>
          </div>
          <div className="min-w-[40vw] my-8 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="payment-method" className="font-semibold">
                Select your payout method
              </Label>
              <Select
                value={payoutMethod}
                onValueChange={(value) => setPayoutMethod(value)}
              >
                <SelectTrigger id="payment-method">
                  <SelectValue placeholder="Choose payment method for withdrawal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="jazzcash">Jazz Cash</SelectItem>
                  <SelectItem value="easypaisa">Easy Paisa</SelectItem>
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
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="account-number" className="font-semibold">
                Enter account details
              </Label>
              <Textarea
                id="account-number"
                placeholder="Enter account details, account number, account name, etc."
                value={accountDetails}
                onChange={(e) => setAccountDetails(e.target.value)}
              />
            </div>
            <Dialog
              open={isDialogOpen}
              onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}
            >
              <Button
                className="bg-main"
                onClick={withdrawBalanceHandler}
                disabled={loading}
              >
                Withdraw Balance
              </Button>
              <DialogContent>
                <div className="flex flex-col justify-center items-center text-center gap-3 min-h-56">
                  <Image src={ConfirmGif} alt="Confirmation" className="w-36" />
                  <h1 className="text-xl font-semibold">
                    Withdrawal Successful 🎉
                  </h1>
                  <p>You've successfully withdrawn Rs. 3400</p>
                  <Button
                    onClick={() => router.push("/earnings")}
                    className="bg-main mt-4"
                  >
                    Back to Earnings
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithDrawBalancePage;
