import { Request, Response } from "express";
import { getStockData } from "../services/polygonService";
import { StockData } from "../types/stockData";

export const fetchStockData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ticker } = req.params;

  try {
    const stockData: StockData = await getStockData(ticker);
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data." });
  }
};
