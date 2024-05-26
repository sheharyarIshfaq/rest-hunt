"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsPlus } from "react-icons/bs";
import CheckBoxItem from "@/components/CheckBoxItem";
import PicturesUpload from "./PicturesUpload";
import { randomBytes } from "crypto";
import { toast } from "@/components/ui/use-toast";
import AddedRoomCard from "./AddedRoomCard";
import { useAppSelector } from "@/redux/store";

const GENERAL_FACILITIES = [
  "electricity",
  "gas",
  "water",
  "internet",
  "cable",
  "cleaning-service",
  "laundry",
  "food",
];

const ROOM_FACILITIES = [
  "wifi",
  "parking",
  "security",
  "furnished",
  "ac",
  "heating",
  "kitchen",
  "tv",
  "balcony",
  "gym",
  "pool",
  "elevator",
];

export interface IRoom {
  _id: string;
  category: string;
  availableRooms: number;
  noOfBathrooms: number;
  generalFacilities: string[];
  roomFacilities: string[];
  images: File[];
  rentAmount: number;
  rentAmountUnit: string;
}

interface IRoomInfoProps {
  addedRooms: IRoom[];
  setAddedRooms: React.Dispatch<React.SetStateAction<IRoom[]>>;
  propertyId: string | undefined;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const RoomInfo = ({
  addedRooms,
  setAddedRooms,
  propertyId,
}: IRoomInfoProps) => {
  const { token } = useAppSelector((state) => state.auth);
  const [room, setRoom] = React.useState<IRoom>({
    _id: randomBytes(4).toString("hex"),
    category: "",
    availableRooms: 0,
    noOfBathrooms: 0,
    generalFacilities: [],
    roomFacilities: [],
    images: [],
    rentAmount: 0,
    rentAmountUnit: "",
  });

  //general facilities change handler
  const handleGeneralFacilitiesChange = (
    checked: boolean,
    facility: string
  ) => {
    if (checked) {
      setRoom({
        ...room,
        generalFacilities: [...room.generalFacilities, facility],
      });
    } else {
      setRoom({
        ...room,
        generalFacilities: room.generalFacilities.filter(
          (item) => item !== facility
        ),
      });
    }
  };

  const isGeneralFacilityChecked = (facility: string) => {
    return room.generalFacilities.includes(facility);
  };

  //room facilities change handler
  const handleRoomFacilitiesChange = (checked: boolean, facility: string) => {
    if (checked) {
      setRoom({ ...room, roomFacilities: [...room.roomFacilities, facility] });
    } else {
      setRoom({
        ...room,
        roomFacilities: room.roomFacilities.filter((item) => item !== facility),
      });
    }
  };

  const isRoomFacilityChecked = (facility: string) => {
    return room.roomFacilities.includes(facility);
  };

  const toastError = (error: string) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error,
    });
  };

  const verifyRoomInputs = () => {
    if (room.category === "") {
      toastError("Please choose room category");
      return false;
    }
    if (room.availableRooms === 0) {
      toastError("Please enter number of rooms");
      return false;
    }
    //if category is already added then show error
    if (addedRooms.some((addedRoom) => addedRoom.category === room.category)) {
      toastError("Room category already added");
      return false;
    }
    //if images are less than 4 then show error
    if (room.images.length < 4) {
      toastError("Please upload at least 4 images");
      return false;
    }
    if (room.rentAmount === 0) {
      toastError("Please enter price");
      return false;
    }

    return true;
  };

  const addRoomToProperty = async () => {
    //if property id is not available then show error
    if (!propertyId) {
      toastError("Something went wrong. Please try again");
      return;
    }
    const formData = new FormData();
    formData.append("category", room.category);
    formData.append("availableRooms", room.availableRooms.toString());
    formData.append("noOfBathrooms", room.noOfBathrooms.toString());
    formData.append(
      "generalFacilities",
      JSON.stringify(room.generalFacilities)
    );
    formData.append("roomFacilities", JSON.stringify(room.roomFacilities));
    room.images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("rentAmount", room.rentAmount.toString());
    formData.append("rentAmountUnit", room.rentAmountUnit);

    try {
      const response = await fetch(
        `${BACKEND_URL}/properties/${propertyId}/room`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const responseData = await response.json();
      if (responseData.error) {
        toastError(responseData.error);
        return;
      }
      setAddedRooms([...addedRooms, room]);
      //reset room state
      setRoom({
        _id: randomBytes(4).toString("hex"),
        category: "",
        availableRooms: 0,
        noOfBathrooms: 0,
        generalFacilities: [],
        roomFacilities: [],
        images: [],
        rentAmount: 0,
        rentAmountUnit: "",
      });
    } catch (error: any) {
      toastError(error.message);
    }
  };

  const addNewRoomHandler = async () => {
    //first check inputs
    if (!verifyRoomInputs()) return;

    //add room to property
    await addRoomToProperty();
  };

  const removeRoomHandler = async (id: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/properties/${propertyId}/room/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      if (responseData.error) {
        toastError(responseData.error);
        return;
      }
      setAddedRooms(addedRooms.filter((room) => room._id !== id));
    } catch (error: any) {
      toastError(error.message);
    }
  };

  return (
    <div className="my-8 flex flex-col gap-6">
      {addedRooms.length > 0 && (
        <div className="flex flex-col gap-3">
          <Label htmlFor="added-rooms" className="ml-1 font-semibold text-lg">
            Added Rooms
          </Label>
          <div className="ml-1">
            {addedRooms.map((room) => (
              <AddedRoomCard
                key={room._id}
                title={room.category}
                price={room.rentAmount}
                images={room.images}
                facilities={[...room.generalFacilities, ...room.roomFacilities]}
                onRemove={() => removeRoomHandler(room._id)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3 justify-between">
          <Label htmlFor="room-category" className="ml-1 font-semibold">
            Room Category{" "}
            <span className="font-medium text-xs text-label">
              (It will be shown as tab)
            </span>
          </Label>
          <Select
            onValueChange={(value) => setRoom({ ...room, category: value })}
            value={room.category}
          >
            <SelectTrigger id="room-category">
              <SelectValue placeholder="Choose Room Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="shared">Shared</SelectItem>
              <SelectItem value="entire-place">Entire Place</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <Label htmlFor="no-of-rooms" className="ml-1 font-semibold">
            No. of rooms{" "}
            <span className="font-medium text-xs text-label">
              (As per category)
            </span>
          </Label>
          <Input
            id="no-of-rooms"
            placeholder="Number of rooms"
            onChange={(e) =>
              setRoom({
                ...room,
                availableRooms: parseInt(e.target.value) || 0,
              })
            }
            value={room.availableRooms}
          />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <Label htmlFor="no-of-bathrooms" className="ml-1 font-semibold">
            No. of bathrooms{" "}
            <span className="font-medium text-xs text-label">
              (As per category)
            </span>
          </Label>
          <Input
            id="no-of-bathrooms"
            placeholder="Number of Bathrooms"
            onChange={(e) =>
              setRoom({ ...room, noOfBathrooms: parseInt(e.target.value) || 0 })
            }
            value={room.noOfBathrooms}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="bills" className="ml-1 font-semibold">
          Bills Included
        </Label>
        <div className="flex items-center gap-8 flex-wrap ml-1">
          {GENERAL_FACILITIES.map((facility) => (
            <CheckBoxItem
              key={facility}
              id={facility}
              label={facility}
              checked={isGeneralFacilityChecked(facility)}
              onCheckedChange={(checked) =>
                handleGeneralFacilitiesChange(checked, facility)
              }
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="rent" className="ml-1 font-semibold">
          Facilities & Services
        </Label>
        <div className="flex items-center gap-8 flex-wrap ml-1">
          {ROOM_FACILITIES.map((facility) => (
            <CheckBoxItem
              key={facility}
              id={facility}
              label={facility}
              checked={isRoomFacilityChecked(facility)}
              onCheckedChange={(checked) =>
                handleRoomFacilitiesChange(checked, facility)
              }
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="gallery" className="ml-1 font-semibold">
          Gallery{" "}
          <span className="font-medium text-xs text-label">
            (You've to upload at least 4 images or more)
          </span>
        </Label>
        <PicturesUpload
          images={room.images}
          setImages={(images: File[]) => setRoom({ ...room, images })}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="price" className="ml-1 font-semibold">
          Price{" "}
          <span className="font-medium text-xs text-label">
            (Choose price per day, week, month or year)
          </span>
        </Label>
        <div className="grid grid-cols-2 gap-6 md:max-w-2xl">
          <Input
            id="price"
            placeholder="Price"
            onChange={(e) =>
              setRoom({ ...room, rentAmount: parseInt(e.target.value) || 0 })
            }
            value={room.rentAmount}
          />
          <Select
            onValueChange={(value) =>
              setRoom({ ...room, rentAmountUnit: value })
            }
            value={room.rentAmountUnit}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="per-day">Per Day</SelectItem>
              <SelectItem value="per-week">Per Week</SelectItem>
              <SelectItem value="per-month">Per Month</SelectItem>
              <SelectItem value="per-year">Per Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <button
        className="flex items-center gap-1 text-main font-medium"
        onClick={addNewRoomHandler}
      >
        <BsPlus className="text-2xl" />
        Add another room category
      </button>
    </div>
  );
};

export default RoomInfo;
