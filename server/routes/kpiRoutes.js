import express from "express";
import { getAllKpis } from "../controllers/kpi.controller.js";

const router = express.Router();

router.get("/", getAllKpis);

export default router;
