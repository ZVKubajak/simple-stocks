// * LineChart.tsx Types * //

export interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
}

export interface LineChartProps {
  ticker: string;
  from: string;
  to: string;
  showPoints: boolean;
  onPointClick: (dataPoint: DataPoint) => void;
}

// ! DataPoint is not used in LineChart.tsx, but can be found in Sidebar.tsx and Stocks.tsx.
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
