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
      {properties?.length > 0 && (
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
      )}
      {properties.length === 0 && (
        <div>
          <h1 className="text-2xl font-semibold">Properties</h1>
          <p className="my-2 text-gray-500">No properties found - try again!</p>
        </div>
      )}
    </section>
  );
};

export default DataSection;
