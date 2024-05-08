import React from "react";
import DUMMY_PROPERTIES from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

const SimilarPropertiesSection = () => {
  return (
    <div className="my-4 container py-6">
      <h1 className="text-2xl font-semibold">Similar Properties</h1>
      <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
    </div>
  );
};

export default SimilarPropertiesSection;
