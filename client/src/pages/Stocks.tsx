import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../layout/Navigation";
import SearchBar from "../layout/SearchBar";
import LineChart from "../components/LineChart";
import TimeOptions from "../layout/TimeOptions";

import "../assets/css/css-pages/Stocks.css";

const Stocks = () => {
  const [ticker, setTicker] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = (ticker: string) => {
    setTicker(ticker.toUpperCase());
  };

  const handleDates = (from: string, to: string) => {
    console.log("Received Dates:", from, "-", to);
    setFrom(from);
    setTo(to);
  };

  return (
    <main>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      {ticker ? (
        <Container fluid>
          <Row>
            <Col md={8}>
              <LineChart ticker={ticker} from={from} to={to} />
            </Col>

            <Col md={4}>
              <div>
                <TimeOptions onDatesChange={handleDates} />
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <p className="chart-message">
          Enter a ticker symbol to see its stock price history.
        </p>
      )}
    </main>
  );
};

export default Stocks;
