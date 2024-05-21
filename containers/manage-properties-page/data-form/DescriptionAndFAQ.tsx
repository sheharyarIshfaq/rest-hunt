import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckBoxItem from "@/components/CheckBoxItem";

const DATA = [
  {
    id: 1,
    question: `Can I list multiple properties on RestHunt if I'm a property owner?`,
    answer: `Yes, you can list as many properties as you want. You can also manage all of them from your dashboard.`,
  },
  {
    id: 2,
    question: `How can I get in touch with the property owner?`,
    answer: `You can send a message to the property owner from the property page. You can also contact them via phone number.`,
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  id: number;
}

const FAQItem = ({ question, answer, id }: FAQItemProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={id.toString()}>
        <AccordionTrigger className="text-left">{question}</AccordionTrigger>
        <AccordionContent className="text-left">{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const DescriptionAndFAQ = () => {
  return (
    <div className="my-8 flex flex-col gap-6 md:max-w-3xl">
      <div className="flex flex-col gap-3">
        <Label htmlFor="description" className="ml-1 font-semibold">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Write something that helps the user to understand your property better. Also you can mention property size and room etc."
          className="min-h-36"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="faq" className="ml-1 font-semibold">
          Frequently Asked Questions{" "}
          <span className="text-sm text-label">
            (Add questions and answers for the buyers)
          </span>
        </Label>
        <Input
          id="faq"
          placeholder="Add a question, for example, can I do custom booking?"
        />
        <Textarea
          id="faq"
          placeholder="Add an answer, for example, Yes you can by dropping me a text"
        />
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="border-black text-black min-w-20"
            size="sm"
          >
            Cancel
          </Button>
          <Button className="ml-2 bg-main min-w-20" size="sm">
            Add FAQ
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {DATA.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            id={item.id}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <Label id="instant-booking" className="ml-1 font-semibold">
          Available for instant booking
        </Label>
        <div className="flex items-center gap-4 ml-1">
          <CheckBoxItem id="instant-booking" label="Yes" />
          <CheckBoxItem id="instant-booking" label="No" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionAndFAQ;
