import { Request, Response } from "express";
import { getCurrentStockData } from "../services/stocks/currentSService";
import { getHistoricalStockData } from "../services/stocks/historicalSService";
import { StockData } from "../types/stockData";

export const fetchCurrentStockData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ticker } = req.params;

  try {
    const currentStockData: StockData = await getCurrentStockData(ticker);
    res.json(currentStockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch current stock data." });
  }
};

export const fetchHistoricalStockData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ticker } = req.params;
  const { multiplier, from, to } = req.query;

  try {
    const historicalStockData: StockData = await getHistoricalStockData(
      ticker,
      Number(multiplier),
      from as string,
      to as string
    );
    res.json(historicalStockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch historical stock data." });
  }
};
