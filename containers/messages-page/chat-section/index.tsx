import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import ChatTopBar from "./ChatTopBar";
import ChatContainer from "./ChatContainer";
import SendMessage from "./SendMessage";
import { useAppSelector } from "@/redux/store";
import { toast } from "@/components/ui/use-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
interface ChatSectionProps {
  currentChat: any;
  onBackClick?: () => void;
  setSendMessage: (message: any) => void;
  recievedMessage?: any;
  onlineUsers?: any[];
}

const ChatSection = ({
  onBackClick,
  currentChat,
  setSendMessage,
  recievedMessage,
  onlineUsers = [],
}: ChatSectionProps) => {
  const { user, token } = useAppSelector((state) => state.auth);

  const [userData, setUserData] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const getUserData = async () => {
    try {
      const userId = currentChat.members.find(
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
    } catch (error) {
      console.log(error);
    }
  };

  const getMessages = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/messages/${currentChat._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      const { messages } = data;
      setMessages(messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentChat !== null && user) {
      getUserData();
      getMessages();
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChat, user, token]);

  const newMessageSendHandler = async () => {
    if (newMessage.trim() === "") {
      return toast({
        variant: "destructive",
        title: "Message can't be empty",
        description: "Please type a message to send",
      });
    }
    const messageObj = {
      senderId: user._id,
      text: newMessage,
      chatId: currentChat._id,
    };
    try {
      const res = await fetch(`${BACKEND_URL}/messages/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageObj),
      });
      const data = await res.json();
      const { savedMessage } = data;
      setMessages((prevMessages) => [...prevMessages, savedMessage]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }

    //send message to socket
    const receiverId = currentChat.members.find(
      (member: string) => member !== user._id
    );
    setSendMessage({ ...messageObj, receiverId });
  };

  useEffect(
    () => {
      if (
        recievedMessage !== null &&
        recievedMessage?.chatId === currentChat._id
      ) {
        setMessages((prevMessages) => [...prevMessages, recievedMessage]);
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [recievedMessage]
  );

  const isOnline = (chat: any) => {
    const chatMember = chat.members.find(
      (member: string) => member !== user._id
    );
    const isOnline = onlineUsers.find((user) => user.userId === chatMember);
    return isOnline ? true : false;
  };
  return (
    <div className="h-[75vh] flex gap-4">
      <div className="border-[1.5px] rounded-md flex-[3] h-[75vh] flex flex-col">
        <ChatTopBar
          userData={userData}
          online={isOnline(currentChat)}
          messages={messages}
        />
        <ChatContainer messages={messages} user={user} userData={userData} />
        <SendMessage
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          newMessageSendHandler={newMessageSendHandler}
        />
      </div>
      <UserDetails userData={userData} />
    </div>
  );
};

export default ChatSection;
