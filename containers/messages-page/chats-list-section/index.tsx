import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/store";

interface ChatItemProps {
  chatData: any;
  isActive: boolean;
  onClick: () => void;
  online: boolean;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const ChatItem = ({ chatData, isActive, onClick, online }: ChatItemProps) => {
  const { user, token } = useAppSelector((state) => state.auth);

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    setIsLoading(true);
    try {
      const userId = chatData.members.find(
        (member: string) => member !== user._id
      );
      const res = await fetch(`${BACKEND_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (data.error) {
        console.log(data.error);
        return;
      }
      setUserData(data.user);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    getUserData();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatData, user, token]);
  return (
    <>
      {!isLoading && (
        <div
          className={`flex items-center gap-2 rounded-md border-b py-3 px-2 transition-all duration-200 ease-in hover:bg-mainLight hover:bg-opacity-55 cursor-pointer ${
            isActive ? "bg-mainLight bg-opacity-55" : ""
          }`}
          onClick={onClick}
        >
          <Avatar>
            <AvatarImage src={userData?.profilePicture} />
            <AvatarFallback>{userData?.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-3 justify-between">
              <h1 className="font-semibold">{userData?.name}</h1>
              <p className="text-sm text-label font-medium">5/4/24</p>
            </div>
            <p className="text-label text-sm">Ask CDCR San dha whta dha...</p>
          </div>
        </div>
      )}
      {/* is loading we show skeleton */}
      {isLoading && (
        <div className="flex items-center gap-2 rounded-md border-b py-3 px-2 animate-pulse">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      )}
    </>
  );
};

interface IChatsListSectionProps {
  chats: any;
  activeChat: string;
  setActiveChat: (chatId: string) => void;
  onlineUsers: any;
}

const ChatsListSection = ({
  chats,
  activeChat,
  setActiveChat,
  onlineUsers,
}: IChatsListSectionProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const isOnline = (chat: any) => {
    const chatMember = chat.members.find((member: any) => member !== user._id);
    const isOnline = onlineUsers.find(
      (user: any) => user.userId === chatMember
    );
    return isOnline ? true : false;
  };

  return (
    <div>
      <div className="flex items-center gap-3 mt-3">
        <Input type="text" placeholder="Search for a chat" className="w-full" />
        <Button className="bg-main">
          <BsSearch className="text-xl" />
        </Button>
      </div>
      <div className="my-4 flex flex-col gap-2 overflow-y-auto h-[65vh] pr-3 custom-scrollbar">
        {chats?.map((chat: any) => (
          <ChatItem
            key={chat._id}
            chatData={chat}
            isActive={chat._id === activeChat}
            onClick={() => setActiveChat(chat._id || "")}
            online={isOnline(chat)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatsListSection;
