"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import moment from "moment";

const EarningsTable = ({ data, type }: { data: any; type: string }) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black font-semibold">Date</TableHead>
            <TableHead className="text-black font-semibold">Activity</TableHead>
            <TableHead className="text-black font-semibold">
              {type === "earning" ? "Description" : "Account Details"}
            </TableHead>
            <TableHead className="text-black font-semibold">
              {type === "earning" ? "From" : "Status"}
            </TableHead>
            <TableHead className="text-black font-semibold">
              {type === "earning" ? "Booking ID" : "Withdrawal Method"}
            </TableHead>
            <TableHead className="text-right text-black font-semibold">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                {moment(item.createdAt).format("DD MMM YYYY")}
              </TableCell>
              <TableCell className="capitalize">{type}</TableCell>
              <TableCell className="max-w-72">
                {type === "earning" ? item?.description : item?.accountDetails}
              </TableCell>
              <TableCell className="capitalize">
                {type === "earning" ? item?.booking?.user?.name : item?.status}
              </TableCell>
              <TableCell className="capitalize">
                {type === "earning" ? item?.booking?._id : item?.payoutMethod}
              </TableCell>
              <TableCell
                className={`text-right font-semibold ${
                  type === "earning" ? "text-green-500" : "text-red-500"
                }`}
              >
                {type === "earning"
                  ? item?.booking?.total
                  : `- ${item?.amount}`}{" "}
                PKR
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
    </>
  );
};

export default EarningsTable;
