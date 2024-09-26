import { Router } from "express";
import { fetchCurrentStockData } from "../../controllers/stockController";
import { fetchHistoricalStockData } from "../../controllers/stockController";

const router = Router();

router.get("/stocks/current/:ticker", fetchCurrentStockData);
router.get("/stocks/historical/:ticker", fetchHistoricalStockData);

export default router;
