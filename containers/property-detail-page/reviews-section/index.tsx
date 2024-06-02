import React from "react";
import PersonImage1 from "@/public/images/multan.png";
import PersonImage2 from "@/public/images/islamabad.png";
import PersonImage3 from "@/public/images/karachi.png";
import PersonImage4 from "@/public/images/faisalabad.png";
import ReviewItem from "@/components/ReviewItem";
import { Button } from "@/components/ui/button";
import { BsChevronRight, BsStarFill } from "react-icons/bs";
import IconButton from "@/components/Shared/IconButton";

const PropertyReviewSection = ({ reviews }: { reviews: any[] }) => {
  return (
    <div className="mt-4 border-b pb-6">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">Reviews</h1>
        <IconButton title="4.5/5" icon={<BsStarFill />} className="text-sm" />
      </div>
      {reviews?.length > 0 && (
        <>
          <div className="my-4 grid xs:grid-cols-2 gap-4">
            <ReviewItem
              name="John Doe"
              rating={4}
              review="This is a great place to live in. I would recommend it to everyone. It
          has all the facilities that you need. The staff is very friendly and helpful."
              image={PersonImage1}
            />
            <ReviewItem
              name="Jane Doe"
              rating={5}
              review="Great experience. The staff is very friendly and helpful. The rooms are
          very clean and well maintained. The food is also very good. I would recommend"
              image={PersonImage2}
            />
            <ReviewItem
              name="John Doe"
              rating={4}
              review="Wow! What a great place to live in. The staff is very friendly and helpful. The rooms are very clean and well maintained. The food is also very good. I would recommend this place to everyone."
              image={PersonImage3}
            />
            <ReviewItem
              name="Jane Doe"
              rating={5}
              review="The best place to live, really enjoyed my stay here. The staff is very
          friendly and helpful. The rooms are very clean and well maintained. The food is
          also very good. I would recommend this place to everyone."
              image={PersonImage4}
            />
          </div>
          <Button variant={"outline"}>
            View All Reviews
            <BsChevronRight />
          </Button>
        </>
      )}
      {reviews?.length === 0 && (
        <div className="mt-4 text-label">
          <p>No reviews found.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyReviewSection;
