// * LineChart.tsx Interfaces * //

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

// * Layout Prop Interfaces * //

export interface SearchBarProps {
  onSearch: (ticker: string) => void;
}

export interface SidebarProps {
  onDatesChange: (from: string, to: string) => void;
  toggleStats: () => void;
  showStats: boolean;
  selectedDataPoint: DataPoint | null;
}

export interface TimeOptionsProps {
  onDatesChange: (from: string, to: string) => void;
}
