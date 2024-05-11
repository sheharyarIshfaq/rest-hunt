import React from "react";
import NoMessagesImg from "@/public/images/no-mesages.svg";
import Image from "next/image";

const EmptyChatSection = () => {
  return (
    <div className="border-[1.5px] rounded-md h-[75vh] flex flex-col items-center justify-center">
      <Image src={NoMessagesImg} alt="No messages" />
      <h1 className="text-xl font-semibold mb-2 mt-4">No messages</h1>
      <p className="text-label">All conversations will appear here</p>
    </div>
  );
};

export default EmptyChatSection;
