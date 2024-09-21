import { Request, Response } from "express";
import { getStockData } from "../services/polygonService";

export const fetchStockData = async (req: Request, res: Response) => {
  const { ticker } = req.params;

  try {
    const stockData = await getStockData(ticker);
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data." });
  }
};
