"use client";
import React from "react";
import ImageUpload from "@/components/ImageUpload";
import { toast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { onUpdateUser } from "@/redux/features/auth-slice";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const ImageUploadSection = () => {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.auth);

  const [image, setImage] = React.useState<File | string | null>(
    user?.profilePicture || null
  );

  const handleImageUpload = async (newImage: File) => {
    setImage(newImage);
    if (!newImage)
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please upload an image.",
      });
    try {
      const formData = new FormData();
      formData.append("profilePicture", newImage);
      const response = await fetch(`${BACKEND_URL}/users/profile-picture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();
      if (responseData.error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
      }
      toast({
        variant: "success",
        title: "Success!",
        description: "Profile picture updated successfully.",
      });
      const { user } = responseData;
      dispatch(onUpdateUser(user));
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: err.message,
      });
    }
  };

  return (
    <div className="my-4 flex justify-center items-center">
      <ImageUpload
        image={image}
        setImage={(image: File) => handleImageUpload(image)}
      />
    </div>
  );
};

export default ImageUploadSection;
