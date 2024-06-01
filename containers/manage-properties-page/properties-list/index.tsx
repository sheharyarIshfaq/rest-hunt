"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
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
import { BsEye, BsPencil, BsTrash, BsShare } from "react-icons/bs";
import { IoPauseCircleOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/redux/store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export type Property = {
  _id: number | string;
  image: string;
  name: string;
  propertyType: string;
  address: string;
  rooms: any[];
};

interface PropertiesListProps {
  properties: Property[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  totalCount: number;
  refetchProperties: () => void;
}

export function PropertiesList({
  properties = [],
  currentPage,
  totalPages,
  setCurrentPage,
  totalCount,
  refetchProperties,
}: PropertiesListProps) {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const handleDelete = async (property: Property) => {
    try {
      const res = await fetch(`${BACKEND_URL}/properties/${property._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await res.json();

      if (responseData.error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.message,
        });
      }
      toast({
        variant: "success",
        title: "Property deleted successfully.",
      });
      refetchProperties();
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: err.message,
      });
    }
  };

  const handleEdit = (property: Property) => {
    router.push(`/manage-properties/${property._id}`);
  };

  const columns: ColumnDef<Property>[] = [
    {
      accessorKey: "name",
      header: "Title",
      cell: ({ row }) => {
        const property = row.original;
        return (
          <div className="min-w-max">
            <div className="flex items-center gap-2">
              <Image
                src={property.image}
                alt={row.getValue("name")}
                className="w-24 h-12 object-cover rounded-lg"
                width={100}
                height={100}
              />
              <div>
                <div className="font-semibold">{row.getValue("name")}</div>
                <div className="text-xs text-label">{property.address}</div>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "propertyType",
      header: "Category",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("propertyType")}</div>
      ),
    },
    {
      accessorKey: "rooms",
      header: () => <div className="text-center">No. of Rooms</div>,
      cell: ({ row }) => {
        return (
          <div className="text-center font-medium">
            {((row.getValue("rooms") as any[]) || []).length}
          </div>
        );
      },
    },
    {
      accessorKey: "bookings",
      header: () => <div className="text-center">Booked</div>,
      cell: ({ row }) => {
        return <div className="text-center font-medium">{17}</div>;
      },
    },
    {
      accessorKey: "cancellations",
      header: () => <div className="text-center">Cancellations</div>,
      cell: ({ row }) => {
        return <div className="text-center font-medium">{20}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const property = row.original;

        return (
          <Dialog>
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
                <DropdownMenuItem onClick={() => handleEdit(property)}>
                  <BsPencil className="mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IoPauseCircleOutline className="mr-2" />
                  Pause
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BsShare className="mr-2" />
                  Share
                </DropdownMenuItem>

                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    <BsTrash className="mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete {property.name} property</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this property? This action
                  cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" onClick={() => handleDelete(property)}>
                    Confirm
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      },
    },
  ];

  const table = useReactTable({
    data: properties,
    columns,
    getCoreRowModel: getCoreRowModel(),
    rowCount: properties.length,
    pageCount: totalPages,
    manualPagination: true,
    state: {
      pagination: {
        pageIndex: currentPage - 1,
        pageSize: 10,
      },
    },
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
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex items-center gap-2">
          {/* show total properties and current page */}
          <span className="text-sm text-label">
            Total properties: {totalCount}
          </span>
          <Separator orientation="vertical" className="h-6" />
          <span className="text-sm text-label">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
