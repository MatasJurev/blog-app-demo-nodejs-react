import express from "express";
import {
    getStockData
} from "../controllers/stock.js";

const router = express.Router();

router.get("/", getStockData);

export default router;
