import PropertyCard from "@/components/PropertyCard";
import DUMMY_PROPERTIES from "@/data/properties";
import React from "react";

const PropertiesList = () => {
  return (
    <div className="mt-6 grid xs:grid-cols-2 md:grid-cols-4 gap-4">
      {DUMMY_PROPERTIES.map((property) => (
        <PropertyCard
          key={property.id}
          image={property.image}
          title={property.title}
          address={property.address}
          price={property.price}
          isFavorite={true}
        />
      ))}
      {DUMMY_PROPERTIES.map((property) => (
        <PropertyCard
          key={property.id}
          image={property.image}
          title={property.title}
          address={property.address}
          price={property.price}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default PropertiesList;
