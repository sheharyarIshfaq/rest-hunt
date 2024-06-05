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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import moment from "moment";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsEye, BsTrash } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const { token } = useAppSelector((state) => state.auth);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setUsers(data.users);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong!",
        description: error.message,
      });
    }
  };

  React.useEffect(() => {
    if (!token) return;
    fetchUsers();
  }, [token]);

  const deleteUserHandler = async (id: string) => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      fetchUsers();
      toast({
        variant: "success",
        title: "User deleted successfully!",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong!",
        description: error.message,
      });
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black font-semibold">
              Profile Picture
            </TableHead>
            <TableHead className="text-black font-semibold">Name</TableHead>
            <TableHead className="text-black font-semibold">
              Email Address
            </TableHead>
            <TableHead className="text-black font-semibold">
              Phone Number
            </TableHead>
            <TableHead className="text-black font-semibold">Address</TableHead>
            <TableHead className="text-black font-semibold">
              Date Joined
            </TableHead>
            <TableHead className="text-black font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={item?.profilePicture} />
                  <AvatarFallback>
                    {item?.name
                      ?.split(" ")
                      .map((name: string) => name[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="capitalize">{item?.name}</TableCell>
              <TableCell className="capitalize">{item?.email}</TableCell>
              <TableCell className="capitalize">
                {item?.phoneNumber || "-"}
              </TableCell>
              <TableCell className="capitalize">
                {item?.location}, Pakistan
              </TableCell>
              <TableCell className="capitalize">
                {moment(item?.createdAt).format("DD MMM YYYY")}
              </TableCell>
              <TableCell className="flex items-center gap-3">
                <button>
                  <BsEye className="text-xl text-gray-500" />
                </button>
                <Dialog>
                  <DialogTrigger asChild>
                    <button>
                      <BsTrash className="text-xl text-red-500" />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete the user from the database.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button onClick={() => deleteUserHandler(item?._id)}>
                        Confirm
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
    </>
  );
};

export default UsersPage;
