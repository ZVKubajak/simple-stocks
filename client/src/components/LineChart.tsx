import { useState, useEffect } from "react";
import axios from "axios";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const fetchHistoricalData = async (
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string
) => {
  try {
    const response = await axios.get(`/api/stocks/historical/${ticker}`, {
      params: { multiplier, timespan, from, to },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching historical stock data", error);
  }
};

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  const ticker = "AAPL";
  const multiplier = 1;
  const timespan = "day";
  const from = "2023-01-01";
  const to = "2023-12-31";

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHistoricalData(
        ticker,
        multiplier,
        timespan,
        from,
        to
      );

      if (data && data.stockResults) {
        const formattedData = {
          labels: data.stockResults.map((result: any) =>
            new Date(result.timeStamp).toLocaleDateString()
          ),
          datasets: [
            {
              label: `${ticker} Stock Price`,
              data: data.stockResults.map((result: any) => result.closedPrice),
              fill: false,
              borderColor: `rgba(75, 192, 192, 1)`,
              tension: 0.1,
            },
          ],
        };

        setChartData(formattedData);
        setLoading(false);
      }
    };

    loadData();
  }, [ticker, multiplier, timespan, from, to]);

  return (
    <div>
      <h2>{ticker} Stock Price History</h2>
      {loading ? <p>Loading...</p> : <Line data={chartData} />}
    </div>
  );
};

export default LineChart;
