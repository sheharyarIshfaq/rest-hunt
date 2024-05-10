import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StarRating from "@/components/StarRating";

const ReviewSection = () => {
  return (
    <div className="mt-6">
      <Accordion type="multiple" value={["my-review", "host-review"]}>
        <AccordionItem value="my-review">
          <AccordionTrigger className="font-semibold">
            My Review
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              <StarRating rating={4} />
              However rare side effects observed among children can be metabolic
              acidosis, coma, respiratory depre However rare side effects
              observed among children can be metabolic acidosis, coma,
              respiratory depre
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="host-review">
          <AccordionTrigger className="font-semibold">
            Host Review
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              <StarRating rating={5} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, deleniti! Doloribus atque accusamus molestias
              recusandae voluptates sunt aperiam ipsum molestiae, nemo iusto
              odit quis rem, quas est eum obcaecati sint odio provident eveniet,
              aut blanditiis totam voluptatum iste. Cum, doloribus.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ReviewSection;
