import React from "react";
import PropertyCard from "@/components/PropertyCard";

const TopPropertiesSection = ({ properties }: { properties: any[] }) => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold">Top Properties</h1>
      <div className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-4">
        {properties?.slice(0, 4)?.map((property) => (
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

export default TopPropertiesSection;
