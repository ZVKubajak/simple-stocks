import axios from "axios";

export const fetchHistoricalData = async (
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string
) => {
  try {
    console.log(`Fetching historical data for ${ticker} from ${from} to ${to}`);
    const response = await axios.get(
      `http://localhost:3001/api/stocks/historical/${ticker}`,
      {
        params: { multiplier, timespan, from, to },
      }
    );
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching historical stock data", error);
  }
};
