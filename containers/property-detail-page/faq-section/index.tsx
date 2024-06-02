import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  _id: number;
}

const FAQItem = ({ question, answer, _id }: FAQItemProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={_id.toString()}>
        <AccordionTrigger className="text-left">{question}</AccordionTrigger>
        <AccordionContent className="text-left">{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

interface PropertyFAQSectionProps {
  propertyFAQs: FAQItemProps[];
}

const PropertyFAQSection = ({ propertyFAQs }: PropertyFAQSectionProps) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-lg font-semibold">Frequently Asked Questions</h1>
      <div className="mt-2">
        {propertyFAQs.map((item) => (
          <FAQItem
            key={item._id}
            question={item.question}
            answer={item.answer}
            _id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyFAQSection;
