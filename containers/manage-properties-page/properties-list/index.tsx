"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import DUMMY_PROPERTIES from "@/data/properties";
import {
  BsEye,
  BsPencil,
  BsTrash,
  BsShare,
  BsPauseCircle,
} from "react-icons/bs";

const data: Property[] = [
  {
    id: DUMMY_PROPERTIES[0].id,
    image: DUMMY_PROPERTIES[0].image.src,
    title: DUMMY_PROPERTIES[0].title,
    category: "Private",
    noOfRooms: 10,
    bookings: 20,
    cancellations: 5,
    address: DUMMY_PROPERTIES[0].address,
  },
  {
    id: DUMMY_PROPERTIES[1].id,
    image: DUMMY_PROPERTIES[1].image.src,
    title: DUMMY_PROPERTIES[1].title,
    category: "Shared",
    noOfRooms: 5,
    bookings: 10,
    cancellations: 2,
    address: DUMMY_PROPERTIES[1].address,
  },
  {
    id: DUMMY_PROPERTIES[2].id,
    image: DUMMY_PROPERTIES[2].image.src,
    title: DUMMY_PROPERTIES[2].title,
    category: "Private",
    noOfRooms: 8,
    bookings: 15,
    cancellations: 3,
    address: DUMMY_PROPERTIES[2].address,
  },
  {
    id: DUMMY_PROPERTIES[3].id,
    image: DUMMY_PROPERTIES[3].image.src,
    title: DUMMY_PROPERTIES[3].title,
    category: "Shared",
    noOfRooms: 6,
    bookings: 12,
    cancellations: 4,
    address: DUMMY_PROPERTIES[3].address,
  },
  {
    id: DUMMY_PROPERTIES[0].id,
    image: DUMMY_PROPERTIES[0].image.src,
    title: DUMMY_PROPERTIES[0].title,
    category: "Private",
    noOfRooms: 12,
    bookings: 25,
    cancellations: 6,
    address: DUMMY_PROPERTIES[0].address,
  },
  {
    id: DUMMY_PROPERTIES[0].id,
    image: DUMMY_PROPERTIES[0].image.src,
    title: DUMMY_PROPERTIES[0].title,
    category: "Private",
    noOfRooms: 10,
    bookings: 20,
    cancellations: 5,
    address: DUMMY_PROPERTIES[0].address,
  },
  {
    id: DUMMY_PROPERTIES[1].id,
    image: DUMMY_PROPERTIES[1].image.src,
    title: DUMMY_PROPERTIES[1].title,
    category: "Shared",
    noOfRooms: 5,
    bookings: 10,
    cancellations: 2,
    address: DUMMY_PROPERTIES[1].address,
  },
  {
    id: DUMMY_PROPERTIES[2].id,
    image: DUMMY_PROPERTIES[2].image.src,
    title: DUMMY_PROPERTIES[2].title,
    category: "Private",
    noOfRooms: 8,
    bookings: 15,
    cancellations: 3,
    address: DUMMY_PROPERTIES[2].address,
  },
  {
    id: DUMMY_PROPERTIES[3].id,
    image: DUMMY_PROPERTIES[3].image.src,
    title: DUMMY_PROPERTIES[3].title,
    category: "Shared",
    noOfRooms: 6,
    bookings: 12,
    cancellations: 4,
    address: DUMMY_PROPERTIES[3].address,
  },
  {
    id: DUMMY_PROPERTIES[0].id,
    image: DUMMY_PROPERTIES[0].image.src,
    title: DUMMY_PROPERTIES[0].title,
    category: "Private",
    noOfRooms: 12,
    bookings: 25,
    cancellations: 6,
    address: DUMMY_PROPERTIES[0].address,
  },
  {
    id: DUMMY_PROPERTIES[0].id,
    image: DUMMY_PROPERTIES[0].image.src,
    title: DUMMY_PROPERTIES[0].title,
    category: "Private",
    noOfRooms: 10,
    bookings: 20,
    cancellations: 5,
    address: DUMMY_PROPERTIES[0].address,
  },
  {
    id: DUMMY_PROPERTIES[1].id,
    image: DUMMY_PROPERTIES[1].image.src,
    title: DUMMY_PROPERTIES[1].title,
    category: "Shared",
    noOfRooms: 5,
    bookings: 10,
    cancellations: 2,
    address: DUMMY_PROPERTIES[1].address,
  },
  {
    id: DUMMY_PROPERTIES[2].id,
    image: DUMMY_PROPERTIES[2].image.src,
    title: DUMMY_PROPERTIES[2].title,
    category: "Private",
    noOfRooms: 8,
    bookings: 15,
    cancellations: 3,
    address: DUMMY_PROPERTIES[2].address,
  },
  {
    id: DUMMY_PROPERTIES[3].id,
    image: DUMMY_PROPERTIES[3].image.src,
    title: DUMMY_PROPERTIES[3].title,
    category: "Shared",
    noOfRooms: 6,
    bookings: 12,
    cancellations: 4,
    address: DUMMY_PROPERTIES[3].address,
  },
  {
    id: DUMMY_PROPERTIES[0].id,
    image: DUMMY_PROPERTIES[0].image.src,
    title: DUMMY_PROPERTIES[0].title,
    category: "Private",
    noOfRooms: 12,
    bookings: 25,
    cancellations: 6,
    address: DUMMY_PROPERTIES[0].address,
  },
];

export type Property = {
  id: number | string;
  image: string;
  title: string;
  category: string;
  noOfRooms: number;
  bookings: number;
  cancellations: number;
  address: string;
};

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const property = row.original;
      return (
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={property.image}
              alt={row.getValue("title")}
              className="w-24 h-12 object-cover rounded-lg"
              width={40}
              height={40}
            />
            <div>
              <div className="font-semibold">{row.getValue("title")}</div>
              <div className="text-xs text-label">{property.address}</div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "noOfRooms",
    header: () => <div className="text-center">No. of Rooms</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {row.getValue("noOfRooms")}
        </div>
      );
    },
  },
  {
    accessorKey: "bookings",
    header: () => <div className="text-center">Booked</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {row.getValue("bookings")}
        </div>
      );
    },
  },
  {
    accessorKey: "cancellations",
    header: () => <div className="text-center">Cancellations</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {row.getValue("cancellations")}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const property = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-36">
            <DropdownMenuItem>
              <BsEye className="mr-2" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsPencil className="mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsPauseCircle className="mr-2" />
              Pause
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsShare className="mr-2" />
              Share
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsTrash className="mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function PropertiesList() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full mt-3">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
