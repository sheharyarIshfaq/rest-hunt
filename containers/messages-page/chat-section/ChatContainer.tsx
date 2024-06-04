import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";
import Image from "next/image";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface MessageProps {
  message: string;
  date: string;
  name: string;
  image: string;
  messageData: any;
}

const Message = ({ message, date, name, image, messageData }: MessageProps) => {
  const [propertyData, setPropertyData] = React.useState<any>(null);

  const getPropertyData = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/properties/${messageData?.propertyId}`
      );
      const data = await res.json();
      if (data.error) {
        console.log(data.error);
        return;
      }
      const property = data.data;
      const room = property?.rooms?.find(
        (room: any) => room._id === messageData?.roomId
      );

      const propertyData = {
        name: property.name,
        image: room?.images[0],
        rentAmount: room?.rentAmount,
        rentAmountUnit: room?.rentAmountUnit,
        category: property.category,
      };

      setPropertyData(propertyData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (messageData?.propertyId) {
      getPropertyData();
    }
  }, [messageData]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={image} />
          <AvatarFallback>
            {name
              ?.split(" ")
              ?.map((n) => n[0])
              ?.join("")}
          </AvatarFallback>
        </Avatar>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-sm text-label">{date}</p>
      </div>
      {propertyData && (
        <div className="flex items-center gap-3 my-3 border p-3 rounded-md">
          <Image
            src={propertyData.image}
            alt={propertyData.name}
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
          <div>
            <h1 className="font-semibold">{propertyData.name}</h1>
            <p className="text-sm">
              {propertyData.rentAmount}/{propertyData.rentAmountUnit}
            </p>
            <p className="text-sm text-label">
              {propertyData.category === "entire-place"
                ? "Entire Place"
                : propertyData.category === "shared"
                ? "Shared Room"
                : "Private Room"}
            </p>
          </div>
        </div>
      )}
      <p className="my-2">{message}</p>
    </div>
  );
};

const ChatContainer = ({
  messages,
  userData,
  user,
}: {
  messages: any[];
  userData: any;
  user: any;
}) => {
  const scroll = React.useRef<any>(null);

  //scroll to bottom
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-4 flex flex-col gap-4 flex-1 custom-scrollbar overflow-y-auto">
      {messages.map((message, index) => {
        const isMessageFromMe = message.senderId === user._id;
        const userAvatar = isMessageFromMe
          ? user?.profilePicture
          : userData?.profilePicture;

        return (
          <div key={message?._id || index} ref={scroll}>
            <Message
              message={message.text}
              image={userAvatar}
              date={moment(message.createdAt).fromNow()}
              name={isMessageFromMe ? user?.name : userData?.name}
              messageData={message}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatContainer;
