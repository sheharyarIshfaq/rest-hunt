import PropertyCard from "@/components/PropertyCard";
import React from "react";

const PropertiesList = ({
  properties,
  handleRemoveFavourite,
}: {
  properties: any[];
  handleRemoveFavourite: (propertyId: string) => void;
}) => {
  return (
    <div className="mt-6 grid xs:grid-cols-2 md:grid-cols-4 gap-4">
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          id={property._id}
          image={property.image}
          title={property.name}
          address={property.address}
          price={property.leastPrice}
          priceUnit={property.leastPriceUnit}
          isFavorite={true}
          updateFavourites={() => handleRemoveFavourite(property._id)}
        />
      ))}
    </div>
  );
};

export default PropertiesList;
