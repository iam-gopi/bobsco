const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB successfully connected to the host: ${con.connection.host}`
      );
    })
    .catch((er) => console.log(JSON.stringify(er)));
};

module.exports = connectDatabase;
