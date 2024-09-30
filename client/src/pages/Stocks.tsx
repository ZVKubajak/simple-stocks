import Navigation from "../layout/Navigation";
import SearchBar from "../layout/SearchBar";

import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const handleSearch = (query: string) => {
    console.log("Search Query:", query);
  };

  return (
    <main>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      <LineChart />
    </main>
  );
};

export default Stocks;
