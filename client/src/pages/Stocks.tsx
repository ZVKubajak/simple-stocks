import Navigation from "../layout/Navigation";
import SearchBar from "../layout/SearchBar";
import StockBarChart from "../components/BarChart";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const handleSearch = (query: string) => {
    console.log("Search Query:", query);
  };

  return (
    <main>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      <StockBarChart />
    </main>
  );
};

export default Stocks;
