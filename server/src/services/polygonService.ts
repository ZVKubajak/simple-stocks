import axios from "axios";
import { config } from "../config/config";

const POLYGON_API_KEY = `${config.baseUrl}/v2`;

export const getStockData = async (ticker: string) => {
  try {
    const response = await axios.get(
      `${POLYGON_API_KEY}/aggs/ticker/${ticker}/prev`,
      {
        params: {
          apiKey: config.polygonApiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    throw error;
  }
};
