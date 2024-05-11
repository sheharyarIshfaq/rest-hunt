import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatItemProps {
  isSelected: boolean;
}

const ChatItem = ({ isSelected }: ChatItemProps) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border-b py-3 px-2 transition-all duration-200 ease-in hover:bg-mainLight hover:bg-opacity-55 cursor-pointer ${
        isSelected ? "bg-mainLight bg-opacity-55" : ""
      }`}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center gap-3 justify-between">
          <h1 className="font-semibold">Sheharyar Ishfaq</h1>
          <p className="text-sm text-label font-medium">5/4/24</p>
        </div>
        <p className="text-label text-sm">Ask CDCR San dha whta dha...</p>
      </div>
    </div>
  );
};

const ChatsListSection = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-3">
        <Input type="text" placeholder="Search for a chat" className="w-full" />
        <Button>
          <BsSearch className="text-xl" />
        </Button>
      </div>
      <div className="my-4 flex flex-col gap-2 overflow-y-auto h-[65vh] pr-3 custom-scrollbar">
        <ChatItem isSelected={false} />
        <ChatItem isSelected={true} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
        <ChatItem isSelected={false} />
      </div>
    </div>
  );
};

export default ChatsListSection;
