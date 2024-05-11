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

const UserReviews = () => {
  return (
    <div className="my-8 w-full">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1">
          <BsStarFill className="text-primary" />
          <span className="text-black font-semibold">4.5</span>
          <p className="text-label">(22 reviews)</p>
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
    </div>
  );
};

export default UserReviews;
