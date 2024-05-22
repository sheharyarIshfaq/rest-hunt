import React from "react";
import Image, { StaticImageData } from "next/image";
import StarRating from "../StarRating";
import moment from "moment";

interface IReviewItem {
  name: string;
  rating: number;
  review: string;
  image: StaticImageData;
}

const ReviewItem = ({ name, rating, review, image }: IReviewItem) => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <Image
            src={image}
            className="w-14 h-14 rounded-full object-cover"
            alt={name}
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-3 my-1 flex-wrap">
            <StarRating rating={rating} />
            <span className="text-sm">{moment().format("MMM DD, YYYY")}</span>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2">{review}</p>
    </div>
  );
};

export default ReviewItem;
