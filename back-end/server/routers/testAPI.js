import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("API is working properly");
});

export default router;
