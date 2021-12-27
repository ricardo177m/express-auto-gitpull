require("dotenv").config();
const express = require("express");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const { port } = require("./config/config");
const app = express();
const httpServer = http.createServer(app);

// middlewares
const corsOptions = require("./middlewares/corsOptions")();
const validatePayload = require("./middlewares/validatePayload");
const fallErrors = require("./middlewares/fallErrors");

app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(corsOptions));
app.use(validatePayload);

// routes
app.use("/gateway", require("./routes/Gateway"));

// fall errors
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use(fallErrors);

httpServer.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
