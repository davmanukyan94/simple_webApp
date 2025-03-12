require("dotenv").config();
const express = require("express");
const umzug = require("./config/umzug");
const UserController = require("./controllers/userController");
const { updateBalanceValidator } = require("./middlewares/validators");

const app = express();
app.use(express.json());
app.post("/api/balance", updateBalanceValidator, UserController.updateBalance);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await umzug.up();
    console.log("Migrations completed successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
