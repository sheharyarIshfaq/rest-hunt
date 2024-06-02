import React from "react";
import PropertyCard from "@/components/PropertyCard";

const DataSection = ({
  properties,
  favourites,
  updatedFavourites,
}: {
  properties: any[];
  favourites: any[];
  updatedFavourites: (propertyId: string) => void;
}) => {
  return (
    <section className="container py-6">
      <div className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-4">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            image={property.image}
            title={property.name}
            address={property.address}
            price={property.leastPrice}
            priceUnit={property.leastPriceUnit}
            isFavorite={favourites?.find(
              (fav) => fav.property === property._id
            )}
            updateFavourites={() => {
              updatedFavourites(property._id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default DataSection;
