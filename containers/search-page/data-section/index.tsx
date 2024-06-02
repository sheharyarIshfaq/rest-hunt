import React from "react";
import DUMMY_PROPERTIES from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const DataSection = ({
  pageNumber,
  searchQuery,
}: {
  pageNumber: number;
  searchQuery: string;
}) => {
  return (
    <section className="container py-6">
      <div className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-4">
        {/* //dummy properties is an array of objects */}
        {DUMMY_PROPERTIES.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            address={property.address}
            price={property.price}
          />
        ))}
        {DUMMY_PROPERTIES.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            address={property.address}
            price={property.price}
          />
        ))}
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
      <div className="py-10 flex items-center justify-center">
        <Button
          asChild
          variant="outline"
          className="border-black font-semibold"
        >
          <Link href={`/search?query=${searchQuery}&page=${pageNumber + 1}`}>
            Load More
            <BsChevronRight className="text-xl" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default DataSection;
