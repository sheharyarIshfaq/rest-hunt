import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "../StarRating";
import moment from "moment";

interface IReviewItem {
  name: string;
  rating: number;
  review: string;
  image: string;
  createdAt: string;
}

const ReviewItem = ({
  name,
  rating,
  review,
  image,
  createdAt,
}: IReviewItem) => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} />
            <AvatarFallback>
              {name
                ?.split(" ")
                ?.map((n: string) => n[0])
                ?.join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-3 my-1 flex-wrap">
            <StarRating rating={rating} />
            <span className="text-sm">
              {moment(createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2">{review}</p>
    </div>
  );
};

export default ReviewItem;
