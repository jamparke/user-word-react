const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there!" });
});

const PORT = process.env.port || 3001;
app.listen(PORT);
