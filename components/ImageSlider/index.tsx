"use client";
import React from "react";
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
    <div className="rounded-lg overflow-hidden w-full h-56">
      <Image
        src={image}
        alt="property"
        className="w-full h-full object-cover rounded-lg"
        width={500}
        height={500}
      />
    </div>
  );
};

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

const Dot = ({ selected, onClick }: DotButtonProps) => {
  return (
    <div
      className={
        `h-3 w-3 rounded-full mr-2 cursor-pointer bg-white  ` +
        (selected ? "" : "opacity-50")
      }
      onClick={onClick}
    ></div>
  );
};

interface IImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: IImageSliderProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
  return (
    <div className="relative">
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem>
              <ImageSlide image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
      </Carousel>
      <div className="my-3 absolute bottom-0 w-full flex justify-center">
        <div className="flex overflow-x-auto no-scrollbar">
          {images.map((image: string, index: number) => (
            <Dot
              selected={current === index + 1}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
