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

const DATA = [
  {
    id: 1,
    date: "2024-05-01",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12345",
    amount: "Rs. 2000",
  },
  {
    id: 2,
    date: "2024-05-02",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 5000",
  },
  {
    id: 3,
    date: "2024-05-03",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12346",
    amount: "Rs. 3000",
  },
  {
    id: 4,
    date: "2024-05-04",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12347",
    amount: "Rs. 2500",
  },
  {
    id: 5,
    date: "2024-05-05",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 1500",
  },
  {
    id: 6,
    date: "2024-05-06",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12348",
    amount: "Rs. 4000",
  },
  {
    id: 7,
    date: "2024-05-07",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12349",
    amount: "Rs. 3500",
  },
  {
    id: 8,
    date: "2024-05-08",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 2500",
  },
  {
    id: 9,
    date: "2024-05-09",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12350",
    amount: "Rs. 2200",
  },
  {
    id: 10,
    date: "2024-05-10",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12351",
    amount: "Rs. 2800",
  },
  {
    id: 11,
    date: "2024-05-11",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 4500",
  },
  {
    id: 12,
    date: "2024-05-12",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12352",
    amount: "Rs. 3200",
  },
  {
    id: 13,
    date: "2024-05-13",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12353",
    amount: "Rs. 2700",
  },
  {
    id: 14,
    date: "2024-05-14",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 3300",
  },
  {
    id: 15,
    date: "2024-05-15",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12354",
    amount: "Rs. 2900",
  },
  {
    id: 16,
    date: "2024-05-16",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12355",
    amount: "Rs. 3100",
  },
  {
    id: 17,
    date: "2024-05-17",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 3700",
  },
  {
    id: 18,
    date: "2024-05-18",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12356",
    amount: "Rs. 3400",
  },
  {
    id: 19,
    date: "2024-05-19",
    activity: "earning",
    description: "Earnings from booking",
    booking_id: "BID12357",
    amount: "Rs. 2600",
  },
  {
    id: 20,
    date: "2024-05-20",
    activity: "withdrawal",
    description: "Withdrawal transferred",
    booking_id: "-",
    amount: "Rs. 4200",
  },
];

const EarningsTable = () => {
  const [records, setRecords] = useState(DATA.slice(0, 5));
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(DATA.length / 5));

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setRecords(DATA.slice(page * 5, page * 5 + 5));
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      setRecords(DATA.slice((page - 2) * 5, (page - 2) * 5 + 5));
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black font-semibold">Date</TableHead>
            <TableHead className="text-black font-semibold">Activity</TableHead>
            <TableHead className="text-black font-semibold">
              Description
            </TableHead>
            <TableHead className="text-black font-semibold">From</TableHead>
            <TableHead className="text-black font-semibold">
              Booking ID
            </TableHead>
            <TableHead className="text-right text-black font-semibold">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((data, index) => (
            <TableRow key={data.id}>
              <TableCell>{data.date}</TableCell>
              <TableCell className="capitalize">{data.activity}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>
                {/*show random names, like John, Smith, Steve */}
                {data.activity === "earning"
                  ? "John"
                  : data.activity === "withdrawal"
                  ? "Smith"
                  : "Steve"}
              </TableCell>
              <TableCell>{data.booking_id}</TableCell>
              <TableCell
                className={`text-right font-semibold ${
                  data.activity === "earning"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {data.activity === "earning" ? data.amount : `- ${data.amount}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
      <div className="mt-3 flex justify-between items-center gap-3">
        <div className="text-sm font-semibold">
          Page {page} of {totalPages}
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="min-w-28 border-black text-black"
            onClick={handlePrev}
            disabled={page === 1}
          >
            Prev
          </Button>
          <Button
            className="min-w-28"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default EarningsTable;
