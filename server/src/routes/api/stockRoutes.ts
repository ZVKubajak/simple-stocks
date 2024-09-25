import { Router } from "express";
import { fetchCurrentStockData } from "../../controllers/stockController";

const router = Router();

router.get("/stocks/:ticker", fetchCurrentStockData);

export default router;
