require("dotenv/config");
const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send(`Hello from ${process.env.MLS_TYPE}`);
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
