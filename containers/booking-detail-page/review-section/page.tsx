import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "@/components/StarRating";
import Link from "next/link";

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
              <Link href="/user/2323" className="flex items-center gap-3 mb-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-lg font-semibold">Sheharyar Ishfaq</h1>
              </Link>
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
