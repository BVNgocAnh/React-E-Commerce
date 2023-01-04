import express from "express";
import { Register, Login } from "../controllers/Auth.controller.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
export default router;
