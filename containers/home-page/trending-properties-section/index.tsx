import PropertyCard from "@/components/PropertyCard";
import React from "react";

const TrendingPropertiesSection = ({ properties }: { properties: any[] }) => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold">Trending Properties</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {properties?.slice(0, 3)?.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.name}
            address={property?.address}
            price={property?.leastPrice}
            image={property.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingPropertiesSection;
