import { useState, useEffect, useRef } from "react";
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

export interface DataPoint {
  volume: number;
  avgPrice: number;
  openPrice: number;
  closedPrice: number;
  highPrice: number;
  lowPrice: number;
  timeStamp: string;
  tradeCount: number;
}

interface LineChartProps {
  ticker: string;
  from: string;
  to: string;
  onPointClick: (dataPoint: DataPoint) => void;
}

const LineChart = ({ ticker, from, to, onPointClick }: LineChartProps) => {
  const [stockResults, setStockResults] = useState<any[]>([]);
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

  const chartRef = useRef<any>(null);

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
          setStockResults(data.stockResults);

          const formattedData = {
            labels: data.stockResults.map((result: any) =>
              new Date(result.timeStamp).toLocaleDateString()
            ),
            datasets: [
              {
                label: `${ticker} Stock Price`,
                data: data.stockResults.map(
                  (result: any) => result.closedPrice
                ),
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

  const handlePointClick = (event: React.MouseEvent) => {
    const chartInstance = chartRef.current;

    if (!chartInstance) {
      console.error("Chart instance is not available.");
      return;
    }

    const points = chartInstance.getElementsAtEventForMode(
      event.nativeEvent,
      "nearest",
      { intersect: true },
      true
    );

    if (points.length > 0) {
      const firstPoint = points[0];
      const i = firstPoint.index;

      if (i >= 0 && 1 < stockResults.length) {
        const clickedData = stockResults[i];

        if (clickedData) {
          const dataPoint = {
            volume: clickedData.volume,
            avgPrice: clickedData.avgPrice,
            openPrice: clickedData.openPrice,
            closedPrice: clickedData.closedPrice,
            highPrice: clickedData.highPrice,
            lowPrice: clickedData.lowPrice,
            timeStamp: clickedData.timeStamp,
            tradeCount: clickedData.tradeCount,
          };

          onPointClick(dataPoint);
          // console.log(dataPoint);
        } else {
          console.error("Clicked data is undefined:", clickedData);
        }
      } else {
        console.error("Index is out of bounds:", i);
      }
    } else {
      console.error("No points found at the clicked position.");
    }
  };

  return (
    <div className="chart-container" onClick={handlePointClick}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line ref={chartRef} data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default LineChart;
