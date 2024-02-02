const express = require("express");
const app = express();

const router = require("./routes");
const log = require("./middlelwares/logger");

app.use(log);
app.use(router);
app.use((req, res, next) => {
  res.send({
    status: "failed",
    message: `Resource ${req.originalUrl} not found`,
  });
});

PORT = 3000;
app.listen(3000, console.log(`Server: http://localhost:${PORT}`));
