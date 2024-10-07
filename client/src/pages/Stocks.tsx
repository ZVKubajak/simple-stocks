import { useState } from "react";

import Navigation from "../layout/Navigation";
import SearchBar from "../layout/SearchBar";

import LineChart from "../components/LineChart";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const [ticker, setTicker] = useState("AAPL");

  const handleSearch = (ticker: string) => {
    setTicker(ticker.toUpperCase());
  };

  return (
    <main>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      <LineChart ticker={ticker} />
    </main>
  );
};

export default Stocks;
