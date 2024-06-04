"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import ChatsListSection from "@/containers/messages-page/chats-list-section";
import ChatSection from "@/containers/messages-page/chat-section";
import EmptyChatSection from "@/containers/messages-page/empty-chat-section";
import ChooseChatSection from "@/containers/messages-page/choose-chat-section";

import { io } from "socket.io-client";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8800";

const MessagesPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  const { user, token } = useAppSelector((state) => state.auth);
  const socket = useRef<any>(null);

  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [chats, setChats] = useState<any[]>([]);
  const [activeChat, setActiveChat] = React.useState<string>("");
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const [sendMessage, setSendMessage] = useState<any>(null);
  const [recievedMessage, setRecievedMessage] = useState<any>(null);
  const [chatsLoading, setChatsLoading] = useState<boolean>(true);

  const getUserChats = async () => {
    setChatsLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/chats/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      const { chats } = data;
      setChats(chats);
      setChatsLoading(false);
    } catch (error) {
      console.log(error);
      setChatsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    getUserChats();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  //socket connection
  useEffect(() => {
    if (!user) return;
    socket.current = io(SOCKET_URL);
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users: any) => {
      setOnlineUsers(users);
    });
    socket.current.on("receive-message", (message: any) => {
      setRecievedMessage(message);
    });
  }, [user]);

  //send message to socket
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  const createChat = async (receiverId: any) => {
    console.log("creating chat");
    console.log(receiverId);
    try {
      const res = await fetch(`${BACKEND_URL}/chats/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          senderId: user._id,
          receiverId,
        }),
      });
      const data = await res.json();
      const { chat } = data;
      setChats((prevChats) => [...prevChats, chat]);
      setActiveChat(chat._id);
    } catch (error) {
      console.log(error);
    }
  };

  //when we get id from url set active chat
  useEffect(() => {
    if (id && !chatsLoading) {
      const requiredChat = chats.find((chat: any) => chat.members.includes(id));
      if (requiredChat) {
        //@ts-ignore
        setActiveChat(requiredChat?._id || "");
      } else {
        createChat(id);
      }
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, chatsLoading]);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mb-8 mt-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>My Messages</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">My Messages</h1>
          <div className="flex gap-4">
            <ChatsListSection
              chats={chats}
              activeChat={activeChat}
              setActiveChat={(chatId: string) => setActiveChat(chatId)}
              onlineUsers={onlineUsers}
            />
            <div className="flex-1">
              {/* <ChooseChatSection /> */}
              {activeChat !== "" && (
                <ChatSection
                  currentChat={chats.find(
                    (chat: any) => chat._id === activeChat
                  )}
                  setSendMessage={setSendMessage}
                  recievedMessage={recievedMessage}
                  onlineUsers={onlineUsers}
                />
              )}
              {activeChat === "" && <EmptyChatSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
