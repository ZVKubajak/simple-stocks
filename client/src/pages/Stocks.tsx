import { useState } from "react";

import Navigation from "../layout/Navigation";
import SearchBar from "../layout/SearchBar";

import LineChart from "../components/LineChart";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const [ticker, setTicker] = useState("");

  const handleSearch = (ticker: string) => {
    setTicker(ticker.toUpperCase());
  };

  return (
    <main>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      {ticker ? (
        <LineChart ticker={ticker} />
      ) : (
        <p id="submit-ticker-message">Enter a ticker symbol to see its stock price history.</p>
      )}
    </main>
  );
};

export default Stocks;
