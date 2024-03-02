require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDatabase = require("./repository/config/DBConnection");
const eVedhikRoutes = require("./routes/Evedhik");
const urls = require("./utils/UrlConstant");

connectDatabase();

const app = express();

app.use(express.json());
app.use(cors());

app.use(urls.evedhik, eVedhikRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "api working fine" });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
