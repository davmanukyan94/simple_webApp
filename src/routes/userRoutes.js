const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { updateBalanceValidator } = require("../middlewares/validators");

router.post("/balance", updateBalanceValidator, UserController.updateBalance);

module.exports = router;
