import React from "react";
import JinnahMausoleum from "@/public/images/Jinnah_Mausoleum.jpg";
import ImageWithText from "@/components/ImageWithText";

const DestinationsSection = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold">
        Explore the Hottest Destinations
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-8">
          <ImageWithText
            image={JinnahMausoleum}
            title="Karachi"
            totalProperties={76}
          />
          <ImageWithText
            image={JinnahMausoleum}
            title="Karachi"
            totalProperties={76}
          />
          <ImageWithText
            image={JinnahMausoleum}
            title="Karachi"
            totalProperties={76}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <ImageWithText
            image={JinnahMausoleum}
            title="Karachi"
            totalProperties={76}
          />
          <ImageWithText
            image={JinnahMausoleum}
            title="Karachi"
            totalProperties={76}
          />
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
