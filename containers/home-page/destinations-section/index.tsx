import React from "react";
import Karachi from "@/public/images/karachi.png";
import Islamabad from "@/public/images/islamabad.png";
import Peshawar from "@/public/images/peshawar.png";
import Multan from "@/public/images/multan.png";
import Faisalabad from "@/public/images/faisalabad.png";
import ImageWithText from "@/components/ImageWithText";

const DestinationsSection = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold">
        Explore the Hottest Destinations
      </h1>
      <div className="mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <ImageWithText image={Karachi} title="Karachi" totalProperties={76} />
          <ImageWithText
            image={Islamabad}
            title="Islamabad"
            totalProperties={126}
          />
          <ImageWithText
            image={Peshawar}
            title="Peshawar"
            totalProperties={56}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <ImageWithText image={Multan} title="Multan" totalProperties={109} />
          <ImageWithText
            image={Faisalabad}
            title="Faisalabad"
            totalProperties={89}
          />
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
