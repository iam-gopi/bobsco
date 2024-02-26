const mongoose = require("mongoose");

const DBConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log(`DB Connected successfully`))
    .catch((err) => console.error(`DB Connection error ::: ${err}`));
};

module.exports = connectDatabase = DBConnection;
