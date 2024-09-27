import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StockBarChart from "../components/StockGraph";

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
