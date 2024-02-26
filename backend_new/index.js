require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDatabase = require("./repository/config/DBConnection");
const routes = require("./routes/routes");

connectDatabase();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
