import "../assets/css/css-components/Charts.css";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Stock A", "Stock B", "Stock C", "Stock D"], // X-axis labels
  datasets: [
    {
      label: "Stock Prices",
      data: [120, 150, 180, 200], // Data corresponding to the labels
      backgroundColor: ["green", "red", "green", "red"], // Color for each bar
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Stock Prices Bar Chart",
    },
  },
};

const BarChart = () => {
  return (
    <div id="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
