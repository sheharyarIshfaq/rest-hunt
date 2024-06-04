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
  //calculate average rating, it should be from 1 to 5
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;
  return (
    <div className="mt-4 border-b pb-6">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">Reviews</h1>
        <IconButton
          title={`${totalRating.toFixed(1)}/5`}
          icon={<BsStarFill />}
          className="text-sm"
        />
      </div>
      {reviews?.length > 0 && (
        <>
          <div className="my-4 grid xs:grid-cols-2 gap-4">
            {reviews?.map((review) => (
              <ReviewItem
                key={review._id}
                name={review?.user?.name}
                rating={review.rating}
                review={review.review}
                image={review?.user?.profilePicture}
                createdAt={review.createdAt}
              />
            ))}
          </div>
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
