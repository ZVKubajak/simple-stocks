import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SearchBar from "../layout/SearchBar";
import LineChart from "../components/LineChart";
import Sidebar from "../layout/Sidebar";

import { DataPoint } from "../utils/types/clientTypes";
import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const [selectedDataPoint, setSelectedDataPoint] = useState<DataPoint | null>(
    null
  );
  const [showStats, setShowStats] = useState(false);
  const [ticker, setTicker] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = (ticker: string) => {
    console.log("Ticker:", ticker);
    setTicker(ticker.toUpperCase());
  };

  const handleDates = (from: string, to: string) => {
    console.log("Received Dates:", from, "-", to);
    setFrom(from);
    setTo(to);
  };

  const handlePointClick = (dataPoint: DataPoint) => {
    console.log("Point clicked:", dataPoint);
    setSelectedDataPoint(dataPoint);
  };

  const toggleStats = () => {
    setShowStats((prev) => !prev);
  };

  return (
    <main>
      <SearchBar onSearch={handleSearch} />
      {ticker ? (
        <Container fluid className="mt-4">
          <h1 id="ticker-title">{ticker} Stock History</h1>
          <Row id="chart-and-sidebar">
            <Col md={8}>
              <LineChart
                ticker={ticker}
                from={from}
                to={to}
                showPoints={showStats}
                onPointClick={handlePointClick}
              />
            </Col>

            <Col md={4}>
              <Sidebar
                onDatesChange={handleDates}
                toggleStats={toggleStats}
                showStats={showStats}
                selectedDataPoint={selectedDataPoint}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <p className="ticker-message">
          Enter a ticker symbol to see its stock price history.
        </p>
      )}
    </main>
  );
};

export default Stocks;
