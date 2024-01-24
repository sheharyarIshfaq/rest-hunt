import CustomSearch from "@/components/CustomSearch";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import DataSection from "@/containers/search-page/data-section";
import FilterSection from "@/containers/search-page/filters-section";

export default function SearchPage({ params }: { params: { value: string } }) {
  return (
    <>
      <Navbar showSearch={true} isDark={true} />
      <div className="container w-full sm:hidden">
        <CustomSearch isSmall={true} className="w-full" />
      </div>
      <FilterSection />
      <DataSection />
      <div className="border-t border-gray-200"></div>
      <Footer />
    </>
  );
}
