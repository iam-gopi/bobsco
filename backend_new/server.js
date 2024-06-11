require("dotenv").config();

const app = require("./src/index");

const connectDatabase = require("./src/repository/config/DBConnection");

(async () => {
  try {
    await connectDatabase();
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server Started and listening at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(
      `Something went wrong. Here is the details ${JSON.stringify(error)}`
    );
  }
})();
