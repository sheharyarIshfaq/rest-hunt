import React from "react";
import UserDetails from "./UserDetails";
import ChatTopBar from "./ChatTopBar";
import ChatContainer from "./ChatContainer";
import SendMessage from "./SendMessage";

const ChatSection = () => {
  return (
    <div className="h-[75vh] flex gap-4">
      <div className="border-[1.5px] rounded-md flex-[3] h-[75vh] flex flex-col">
        <ChatTopBar />
        <ChatContainer />
        <SendMessage />
      </div>
      <UserDetails />
    </div>
  );
};

export default ChatSection;
