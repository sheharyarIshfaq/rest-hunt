"use client";
import React from "react";
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
    <div className="rounded-lg overflow-hidden w-full h-56">
      <Image
        src={image}
        alt="property"
        className="w-full h-full object-cover rounded-lg"
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

const ImageSlider = () => {
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
          <CarouselItem>
            <ImageSlide image={Propery1} />
          </CarouselItem>
          <CarouselItem>
            <ImageSlide image={Propery2} />
          </CarouselItem>
          <CarouselItem>
            <ImageSlide image={Propery3} />
          </CarouselItem>
          <CarouselItem>
            <ImageSlide image={Propery4} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
      </Carousel>
      <div className="my-3 absolute bottom-0 w-full flex justify-center">
        <div className="flex overflow-x-auto no-scrollbar">
          <Dot selected={current === 1} onClick={() => api?.scrollTo(0)} />
          <Dot selected={current === 2} onClick={() => api?.scrollTo(1)} />
          <Dot selected={current === 3} onClick={() => api?.scrollTo(2)} />
          <Dot selected={current === 4} onClick={() => api?.scrollTo(3)} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
