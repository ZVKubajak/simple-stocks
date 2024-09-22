export interface StockData {
  requestId: string;
  status: string;
  ticker: string;
  isAdjusted: boolean;
  queryCount: number;
  resultsCount: number;
  stockResults: StockResult[];
  count: number;
}

export interface StockResult {
  ticker: string;
  volume: number;
  avgPrice: number;
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  timestamp: number;
  tradeCount: number;
}
