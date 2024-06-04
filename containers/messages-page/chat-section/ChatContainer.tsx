import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";

interface MessageProps {
  message: string;
  date: string;
  name: string;
  image: string;
}

const Message = ({ message, date, name, image }: MessageProps) => {
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatContainer;
