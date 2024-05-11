import React from "react";
import ChooseCoverssationImg from "@/public/images/choose-conversation.svg";
import Image from "next/image";

const ChooseChatSection = () => {
  return (
    <div className="border-[1.5px] rounded-md h-[75vh] flex flex-col items-center justify-center">
      <Image src={ChooseCoverssationImg} alt="No messages" />
      <h1 className="text-xl font-semibold mb-2 mt-4">Continue Conversation</h1>
      <p className="text-label">Select a conversation and start chatting</p>
    </div>
  );
};

export default ChooseChatSection;
