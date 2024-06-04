"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import EarningsDataSection from "@/containers/earnings-page/earning-data-section";
import EarningsTable from "@/containers/earnings-page/earnings-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/redux/store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const EarningsPage = () => {
  const { token } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = React.useState("earnings");

  const [earnings, setEarnings] = React.useState([]);
  const [withdrawals, setWithdrawals] = React.useState([]);
  const [totalEarnings, setTotalEarnings] = React.useState(0);
  const [withdrawnAmount, setWithdrawnAmount] = React.useState(0);
  const [pendingWithdrawal, setPendingWithdrawal] = React.useState(0);

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

      setEarnings(data.earnings);
      setTotalEarnings(data.totalEarnings);
      setWithdrawnAmount(data.withdrawnAmount);
      setPendingWithdrawal(data.pendingAmount);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWithdrawals = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/withdrawals`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setWithdrawals(data.withdrawals);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEarnings();
    fetchWithdrawals();
  }, [activeTab]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>My Earnings</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">My Earnings</h1>
        <div className="mt-6">
          <EarningsDataSection
            totalEarnings={totalEarnings}
            withdrawnAmount={withdrawnAmount}
            pendingWithdrawal={pendingWithdrawal}
          />
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="withdrawal">Withdrawal</TabsTrigger>
            </TabsList>
            <TabsContent value="earnings">
              <EarningsTable data={earnings} type="earning" />
            </TabsContent>
            <TabsContent value="withdrawal">
              <EarningsTable data={withdrawals} type="withdrawal" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default EarningsPage;
