import PropertyCard from "@/components/PropertyCard";
import DUMMY_PROPERTIES from "@/data/properties";
import React from "react";

const TrendingPropertiesSection = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold">Trending Properties</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {DUMMY_PROPERTIES.slice(0, 3).map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            address={property.address}
            price={property.price}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingPropertiesSection;
