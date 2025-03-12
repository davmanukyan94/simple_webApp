const { body, validationResult } = require("express-validator");

const updateBalanceValidator = [
  body("userId").isInt().withMessage("User ID must be an integer"),
  body("amount").isFloat().withMessage("Amount must be a number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  updateBalanceValidator,
};
