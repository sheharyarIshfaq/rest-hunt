import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image, { StaticImageData } from "next/image";

import DUMMY_PROPERTIES from "@/data/properties";

import { FaRegCircleCheck } from "react-icons/fa6";
import { BsChevronRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";

interface IRoomCard {
  title: string;
  price: number;
  image: StaticImageData;
  facilities: string[];
}

const RoomCard = ({ title, price, image, facilities }: IRoomCard) => {
  return (
    <div className="border p-4 rounded-lg w-full">
      <div className="flex gap-4">
        <Image src={image} alt="Room" className="w-56 object-cover" />
        <div className="mt-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm mt-1">From {price}/Month</p>
          <div className="flex items-center gap-1 flex-wrap mt-2">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mt-1 min-w-20"
              >
                <FaRegCircleCheck className="text-lg" />
                <span>{facility}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 my-3 text-gray-500">
            View Details <BsChevronRight />
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Button size={"sm"} className="min-w-20" variant={"outline"}>
          Enquire
        </Button>
        <Button
          size={"sm"}
          className="min-w-20 bg-main hover:bg-main hover:shadow-md"
        >
          Book
        </Button>
      </div>
    </div>
  );
};

const ChooseRoomSection = () => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Choose Your Room</h1>
      <div className="mt-3">
        <Tabs defaultValue="private">
          <TabsList>
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
            <TabsTrigger value="entire">Entire Place</TabsTrigger>
          </TabsList>
          <TabsContent value="private">
            <p>10 private rooms are available </p>
            <div className="flex flex-col gap-4 mt-4">
              <RoomCard
                title={DUMMY_PROPERTIES[0].title}
                price={DUMMY_PROPERTIES[0].price}
                image={DUMMY_PROPERTIES[0].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="shared">
            <p>10 shared rooms are available </p>
            <div className="flex flex-col gap-4 mt-4">
              <RoomCard
                title={DUMMY_PROPERTIES[1].title}
                price={DUMMY_PROPERTIES[1].price}
                image={DUMMY_PROPERTIES[1].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
              <RoomCard
                title={DUMMY_PROPERTIES[2].title}
                price={DUMMY_PROPERTIES[2].price}
                image={DUMMY_PROPERTIES[2].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="entire">
            <p>10 entire places are available </p>
            <div className="flex flex-col gap-4 mt-4">
              <RoomCard
                title={DUMMY_PROPERTIES[3].title}
                price={DUMMY_PROPERTIES[3].price}
                image={DUMMY_PROPERTIES[3].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
              <RoomCard
                title={DUMMY_PROPERTIES[0].title}
                price={DUMMY_PROPERTIES[0].price}
                image={DUMMY_PROPERTIES[0].image}
                facilities={["Wifi", "Water", "Electricity", "Gas"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChooseRoomSection;
