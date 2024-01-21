import PropertyCard from "@/components/PropertyCard";
import DUMMY_PROPERTIES from "@/data/properties";
import React from "react";

const TopPropertiesSection = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-semibold">Top Properties</h1>
      <div className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-4">
        {DUMMY_PROPERTIES.map((property) => (
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

export default TopPropertiesSection;
