const express = require("express");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use(userRoutes);

router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

router.use("*", (req, res) => {
  res.status(404).json({ success: false, error: "Endpoint not found" });
});

module.exports = router;
