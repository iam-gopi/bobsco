require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDatabase = require("./repository/config/DBConnection");
const eVedhikRoutes = require("./routes/Evedhik");

connectDatabase();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/evedhik", eVedhikRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
