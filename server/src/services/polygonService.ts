import axios from "axios";
import { config } from "../config/config";
import { StockData, StockResult } from "../types/stockData";

const POLYGON_API_KEY = `${config.baseUrl}/v2`;

export const getStockData = async (ticker: string): Promise<StockData> => {
  try {
    const response = await axios.get(
      `${POLYGON_API_KEY}/aggs/ticker/${ticker}/prev`,
      {
        params: {
          apiKey: config.polygonApiKey,
        },
      }
    );

    // This maps the API response to the custom interfaces.
    const apiData = response.data;

    const stockResults: StockResult[] = apiData.results.map((result: any) => ({
      ticker: result.T,
      volume: result.v,
      avgPrice: result.vw,
      openPrice: result.o,
      closedPrice: result.c,
      highPrice: result.h,
      lowPrice: result.l,
      timeStamp: result.t,
      tradeCount: result.n,
    }));

    return {
      requestId: apiData.request_id,
      status: apiData.status,
      ticker: apiData.ticker,
      isAdjusted: apiData.adjusted,
      queryCount: apiData.queryCount,
      resultsCount: apiData.resultsCount,
      stockResults,
      count: apiData.count,
    };
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    throw error;
  }
};
