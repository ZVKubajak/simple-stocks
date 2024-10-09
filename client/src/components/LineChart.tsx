import { useState, useEffect } from "react";
import { fetchHistoricalData } from "../utils/fetchData";

import "../assets/css/css-components/Charts.css";

import { chartOptions } from "../utils/chartOptions";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController
);

interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
}

interface LineChartProps {
  ticker: string;
  from: string;
  to: string;
}

const LineChart = ({ ticker, from, to }: LineChartProps) => {
  const [chartData, setChartData] = useState<LineChartData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "",
        tension: 0,
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  const multiplier = 1;
  const timespan = "day";

  useEffect(() => {
    if (from && to) {
      const loadData = async () => {
        const data = await fetchHistoricalData(
          ticker,
          multiplier,
          timespan,
          from,
          to
        );

        // console.log("Fetched data:", data);

        if (data && data.stockResults) {
          const formattedData = {
            labels: data.stockResults.map((result: any) =>
              new Date(result.timeStamp).toLocaleDateString()
            ),
            datasets: [
              {
                label: `${ticker} Stock Price`,
                data: data.stockResults.map((result: any) => result.closedPrice),
                borderColor: "rgba(0, 255, 150, 1)",
                tension: 0.1,
              },
            ],
          };

          console.log("Formatted chart data:", formattedData);

          setChartData(formattedData);
          setLoading(false);
        } else {
          console.log("No stock results found in the data.");
        }
      };

      loadData();
    }
  }, [ticker, from, to]);

  return (
    <div className="chart-container">
      <h2>{ticker} Stock Price History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default LineChart;
