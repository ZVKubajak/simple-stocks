import { useState } from "react";

import Navigation from "../layout/Navigation";
import SearchBar from "../layout/SearchBar";
import LineChart from "../components/LineChart";
import TimeOptions from "../layout/TimeOptions";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const [ticker, setTicker] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [timePeriod, setTimePeriod] = useState("4");

  const handleSearch = (ticker: string) => {
    setTicker(ticker.toUpperCase());
  };

  const handlePeriod = (period: string) => {
    setTimePeriod(period);
  };

  const handleDates = (from: string, to: string) => {
    setFrom(from);
    setTo(to);
  };

  return (
    <main>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      {ticker ? (
        <>
          <LineChart ticker={ticker} from={from} to={to} />
          <TimeOptions onPeriodChange={handlePeriod} onDatesChange={handleDates} />
        </>
      ) : (
        <p id="submit-ticker-message">
          Enter a ticker symbol to see its stock price history.
        </p>
      )}
    </main>
  );
};

export default Stocks;
