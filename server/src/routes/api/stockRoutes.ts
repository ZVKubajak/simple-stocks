import { Router } from "express";
import { fetchStockData } from "../../controllers/stockController";

const router = Router();

router.get("/stocks/:ticker", fetchStockData);

export default router;
