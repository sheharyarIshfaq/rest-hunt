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
    <div className="rounded-lg overflow-hidden max-h-[60vh]">
      <Image
        src={image}
        alt="property"
        className="w-full h-full object-cover rounded-lg"
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
      />
    </div>
  );
};

const PropertyImagesSection = () => {
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
    <div>
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
        {/* show the active and total on the right side */}
        <div className="absolute bottom-2 right-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">
          {current}/{count}
        </div>
      </Carousel>
      <div className="hidden sm:block my-3">
        <div className="flex overflow-x-auto no-scrollbar">
          <Thumb
            selected={current === 1}
            image={Propery1}
            onClick={() => api?.scrollTo(0)}
          />
          <Thumb
            selected={current === 2}
            image={Propery2}
            onClick={() => api?.scrollTo(1)}
          />
          <Thumb
            selected={current === 3}
            image={Propery3}
            onClick={() => api?.scrollTo(2)}
          />
          <Thumb
            selected={current === 4}
            image={Propery4}
            onClick={() => api?.scrollTo(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyImagesSection;
