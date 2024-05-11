import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SendMessage = () => {
  return (
    <div className="px-4 pb-4 pt-2 flex items-center gap-4">
      <Input
        placeholder="Type your message"
        className="w-full"
        type="text"
        name="message"
        id="message"
      />
      <Button type="submit" className="bg-main">
        Send
      </Button>
    </div>
  );
};

export default SendMessage;
