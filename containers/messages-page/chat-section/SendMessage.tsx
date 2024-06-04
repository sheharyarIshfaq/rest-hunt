import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

interface SendMessageProps {
  newMessage: string;
  setNewMessage: (message: string) => void;
  newMessageSendHandler: () => void;
}

const SendMessage = ({
  newMessage,
  setNewMessage,
  newMessageSendHandler,
}: SendMessageProps) => {
  return (
    <div className="px-4 pb-4 pt-2 flex items-center gap-4">
      <Input
        placeholder="Type your message"
        className="w-full"
        type="text"
        name="message"
        id="message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && newMessageSendHandler()}
      />
      <Button type="submit" className="bg-main" onClick={newMessageSendHandler}>
        Send
      </Button>
    </div>
  );
};

export default SendMessage;
