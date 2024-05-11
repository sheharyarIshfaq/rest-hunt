import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PersonImg from "@/public/images/karachi.png";
import PersonImg2 from "@/public/images/faisalabad.png";
import { StaticImageData } from "next/image";

interface MessageProps {
  message: string;
  date: string;
  name: string;
  image: string | StaticImageData;
}

const Message = ({ message, date, name, image }: MessageProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={typeof image === "string" ? image : image.src} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-sm text-label">{date}</p>
      </div>
      <p className="my-2">{message}</p>
    </div>
  );
};

const ChatContainer = () => {
  return (
    <div className="p-4 flex flex-col gap-4 flex-1 custom-scrollbar overflow-y-auto">
      <Message
        name="Sheharyar Ishfaq"
        date="May 11, 2024, 12:38 AM"
        message="Hey, how are you?"
        image={PersonImg2}
      />
      <Message
        name="Me"
        date="May 11, 2024, 12:40 AM"
        message="I'm good, how about you?"
        image={PersonImg}
      />
      <Message
        name="Sheharyar Ishfaq"
        date="May 11, 2024, 12:42 AM"
        message="I'm good too, thanks for asking"
        image={PersonImg2}
      />
      <Message
        name="Me"
        date="May 11, 2024, 12:45 AM"
        message="That's great to hear"
        image={PersonImg}
      />
      <Message
        name="Sheharyar Ishfaq"
        date="May 11, 2024, 12:48 AM"
        message="Yeah, it is"
        image={PersonImg2}
      />
      <Message
        name="Sheharyar Ishfaq"
        date="May 11, 2024, 01:00 AM"
        message="Can you help me with something? I'm stuck on a problem and would appreciate your help"
        image={PersonImg2}
      />
      <Message
        name="Me"
        date="May 11, 2024, 01:02 AM"
        message="Sure, I'd be happy to help"
        image={PersonImg}
      />
      <Message
        name="Me"
        date="May 11, 2024, 01:05 AM"
        message="What's the problem? How can I help you?"
        image={PersonImg}
      />
    </div>
  );
};

export default ChatContainer;
