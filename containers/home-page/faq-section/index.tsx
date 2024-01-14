import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  {
    id: 3,
    question: `Can I book a property for someone else?`,
    answer: `Yes, you can book a property for someone else. You can also contact us if you need any help.`,
  },
  {
    id: 4,
    question: `How can I contact customer service if I have an issue with my booking?`,
    answer: `You can contact us via email or phone number. We are available 24/7 to help you with any issue.`,
  },
  {
    id: 5,
    question: `How does RestHunt ensure the security of my payment information?`,
    answer: `We use Stripe to process all payments. Stripe is a certified PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry.`,
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
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const FAQSection = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold text-center">
        Frequently Asked Questions
      </h1>
      <div className="mt-14">
        {DATA.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
