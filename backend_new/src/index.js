const express = require("express");
const cors = require("cors");

const eVedhikRoutes = require("./src/routes/Evedhik");
const urls = require("./src/utils/UrlConstant");

const app = express();

app.use(express.json());
app.use(cors());

app.use(urls.evedhik, eVedhikRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "api working fine" });
});

module.exports = app;
