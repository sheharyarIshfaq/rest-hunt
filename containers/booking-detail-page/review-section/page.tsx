import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "@/components/StarRating";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const ReviewItem = ({
  name,
  rating,
  review,
  image,
  isMyReview,
  userId,
}: any) => {
  return (
    <div className="border-b pb-3">
      <h1 className="my-2 font-semibold text-lg">
        {isMyReview ? "My Review" : "Host Review"}
      </h1>
      <div className="flex flex-col gap-1">
        <Link href={`/user/${userId}`} className="flex items-center gap-3 mb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={image} />
            <AvatarFallback>
              {name
                ?.split(" ")
                ?.map((n: string) => n[0])
                ?.join("")}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-semibold">{name}</h1>
        </Link>
        <StarRating rating={rating} />
        {review}
      </div>
    </div>
  );
};

const ReviewSection = ({ booking }: { booking: any }) => {
  const { token, user } = useAppSelector((state) => state.auth);
  const [reviews, setReviews] = React.useState<any | null>(null);
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/reviews/booking/${booking._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
      setReviews(responseData.reviews);
    } catch (e: any) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchReviews();
  }, [booking]);

  const isMyReviewAdded = () => {
    return reviews?.some((review: any) => review.user._id === user?._id);
  };

  const addReviewHandler = async () => {
    if (!token) return;
    if (!rating)
      return toast({
        variant: "destructive",
        title: "Rating is required",
        description: "Please provide a rating to submit a review",
      });
    if (review?.trim() === "")
      return toast({
        variant: "destructive",
        title: "Review is required",
        description: "Please provide a review to submit a review",
      });
    try {
      const response = await fetch(`${BACKEND_URL}/reviews/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          booking: booking._id,
          rating,
          review,
          property: booking.property._id,
        }),
      });
      const responseData = await response.json();
      if (responseData.error) {
        console.log(responseData.error);
        return;
      }
      setReviews([...reviews, responseData.review]);
      setRating(0);
      setReview("");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="mt-6">
        {/* add review */}
        {!isMyReviewAdded() && (
          <div className="border-b pb-3">
            <h1 className="my-2 font-semibold text-lg">Add Review</h1>
            <div className="flex flex-col gap-3">
              <StarRating
                rating={rating}
                onChange={(value) => setRating(value)}
                disabled={false}
              />
              <Textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here..."
                className="h-32 resize-none"
              />
              <Button className="bg-main" onClick={addReviewHandler}>
                Submit Review
              </Button>
            </div>
          </div>
        )}
        {reviews?.length > 0 && (
          <>
            {reviews.map((review: any) => (
              <ReviewItem
                key={review._id}
                userId={review.user._id}
                name={review.user.name}
                rating={review.rating}
                review={review.review}
                image={review.user.profilePicture}
                isMyReview={review.user._id === user?._id}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ReviewSection;
