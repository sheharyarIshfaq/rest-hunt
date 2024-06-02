import CustomSearch from "@/components/CustomSearch";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import DataSection from "@/containers/search-page/data-section";
import FilterSection from "@/containers/search-page/filters-section";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getProperties(searchQuery: string, pageNumber: number) {
  const res = await fetch(
    `${BACKEND_URL}/properties?search=${searchQuery}&page=${pageNumber}`
  );
  const data = await res.json();
  return data;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const searchQuery = searchParams?.query || "";
  const pageNumber = Number(searchParams?.page) || 1;
  const properties = await getProperties(searchQuery, pageNumber);
  console.log("properties", properties);
  return (
    <>
      <Navbar showSearch={true} isDark={true} />
      <div className="container w-full sm:hidden">
        <CustomSearch isSmall={true} className="w-full" />
      </div>
      <FilterSection />
      <DataSection pageNumber={pageNumber} searchQuery={searchQuery} />
      <div className="border-t border-gray-200"></div>
      <Footer />
    </>
  );
}
