require("dotenv").config();
const express = require("express");
const umzug = require("./config/umzug");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);

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

// Start the server
startServer();
