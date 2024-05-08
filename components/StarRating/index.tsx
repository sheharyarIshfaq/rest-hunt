import React from "react";
import Rating from "react-rating";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface IStarRating {
  rating: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

const StarRating = ({ rating, disabled = true, onChange }: IStarRating) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Rating
        initialRating={rating}
        onChange={onChange}
        readonly={disabled}
        emptySymbol={<BsStar className="text-gray-300 text-lg mx-[0.5px]" />}
        fullSymbol={
          <BsStarFill className="text-yellow-400 text-lg mx-[0.5px]" />
        }
        placeholderSymbol={
          <BsStarHalf className="text-yellow-400 text-lg mx-[0.5px]" />
        }
      />
    </>
  );
};

export default StarRating;
