import React from "react";
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

const MessagesPage = () => {
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
            <ChatsListSection />
            <div className="flex-1">
              {/* <EmptyChatSection /> */}
              <ChooseChatSection />
            </div>
            {/* <ChatSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
