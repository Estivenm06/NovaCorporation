import express from "express";
import { getMain, getPlans } from "../controllers/pagesController.js";
import {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
} from "../controllers/accessController.js";

const router = express.Router();

router.get("/", getMain);
router.get("/plans", getPlans);
router.get("/login", getLogin);
router.get("/register", getRegister);
router.post("/login", postLogin);
router.post("/register", postRegister);

export default router;
