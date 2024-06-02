"use client";
import React, { useEffect } from "react";
import Propery1 from "@/public/images/property1.png";
import Propery2 from "@/public/images/property2.png";
import Propery3 from "@/public/images/property3.png";
import Propery4 from "@/public/images/property4.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

const ImageSlide = ({ image }: any) => {
  return (
    <div className="rounded-lg overflow-hidden max-h-[60vh]">
      <Image
        src={image}
        alt="property"
        className="w-full h-full object-cover rounded-lg"
        width={1920}
        height={1080}
      />
    </div>
  );
};

interface IThumb {
  selected: boolean;
  image: any;
  onClick: () => void;
}

const Thumb = ({ selected, image, onClick }: IThumb) => {
  return (
    <div
      className={
        `min-w-28 h-20 mr-2 cursor-pointer rounded-md overflow-hidden ` +
        (selected ? "border-[3px] border-main" : "")
      }
      onClick={onClick}
    >
      <Image
        src={image}
        alt="property"
        className="w-full h-full object-cover"
        width={200}
        height={120}
      />
    </div>
  );
};

const PropertyImagesSection = ({ property }: { property: any }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [images, setImages] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!property) return;
    //property has rooms array, and each room has images array
    const images = property.rooms.flatMap((room: any) => room.images);
    setImages(images);
    setCount(images.length);
  }, [property]);

  return (
    <div>
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <ImageSlide image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
        {/* show the active and total on the right side */}
        <div className="absolute bottom-2 right-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">
          {current}/{count}
        </div>
      </Carousel>
      <div className="hidden sm:block my-3">
        <div className="flex overflow-x-auto no-scrollbar max-w-[53vw]">
          {images.map((image, index) => (
            <Thumb
              key={index}
              selected={current === index + 1}
              image={image}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyImagesSection;
