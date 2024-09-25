import { Request, Response } from "express";
import { getCurrentStockData } from "../services/stocks/currentSService";
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
    res.status(500).json({ error: "Failed to fetch stock data." });
  }
};
