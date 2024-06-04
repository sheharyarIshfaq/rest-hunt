"use client";
import React, { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const SimilarPropertiesSection = () => {
  const [properties, setProperties] = useState<any[]>([]);

  const getProperties = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/properties/`);
      const data = await res.json();
      if (data.error) {
        console.error(data.error);
        return;
      }
      setProperties(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="my-4 container py-6">
      <h1 className="text-2xl font-semibold">Similar Properties</h1>
      <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
    </div>
  );
};

export default SimilarPropertiesSection;
