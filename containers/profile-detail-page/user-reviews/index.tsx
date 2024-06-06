import React from "react";
import { BsStarFill } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewItem from "@/components/ReviewItem";
import PersonImage1 from "@/public/images/multan.png";
import PersonImage2 from "@/public/images/islamabad.png";
import PersonImage3 from "@/public/images/karachi.png";
import PersonImage4 from "@/public/images/faisalabad.png";

const UserReviews = ({
  reviewsCount,
  averageRating,
  reviews,
}: {
  reviewsCount: number;
  averageRating: number;
  reviews: any[];
}) => {
  return (
    <div className="my-8 w-full">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1">
          <BsStarFill className="text-primary" />
          <span className="text-black font-semibold">{averageRating}/5</span>
          <p className="text-label">({reviewsCount} reviews)</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-label font-medium w-[80px]">Sort By</label>
          <Select value="relevant">
            <SelectTrigger className="h-8">
              <SelectValue defaultValue={"light"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevant">Most Relevant</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="my-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewItem
            key={index}
            name={review.user?.name}
            rating={review.rating}
            review={review.review}
            image={review?.user?.profilePicture}
            createdAt={review.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
