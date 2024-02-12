require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const routes = require("./routes/routes");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log(`DB Connected successfully`))
  .catch((err) => console.error(`DB Connection error ::: ${err}`));
const database = mongoose.connection;

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
