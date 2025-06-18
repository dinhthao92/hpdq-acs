import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import ResultsSection from "@/components/ResultsSection";
import DataTable from "@/components/DataTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Search form */}
        <SearchForm />

        {/* Results section with map */}
        <ResultsSection />

        {/* Data table */}
        <DataTable />
      </main>
    </div>
  );
};

export default Index;
