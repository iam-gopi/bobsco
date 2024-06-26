const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
});

module.exports = VedhikSchema = mongoose.model("VedhikForm", userSchema);
