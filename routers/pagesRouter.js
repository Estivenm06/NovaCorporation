import express from "express";
import { getMain, getPlans } from "../controllers/pagesController.js";

const router = express.Router();

router.get("/", getMain);
router.get("/plans", getPlans)

export default router;
