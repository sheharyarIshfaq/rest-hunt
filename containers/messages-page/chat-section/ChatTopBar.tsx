import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatTopBar = () => {
  return (
    <div className="border-b-[1.5px] p-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="font-semibold text-lg">Sheharyar Ishfaq</h1>
      </div>
      <p className="text-label mt-1 text-sm font-medium">
        Last seen 2 days ago - 5th Feb, 2024
      </p>
    </div>
  );
};

export default ChatTopBar;
