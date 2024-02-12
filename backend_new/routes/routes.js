const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
});
// Compile schema into a model
const VedhikForm = mongoose.model("VedhikForm", userSchema);

router.post("/evedhik/register", (req, res) => {
  console.log(req.body);
  const v = new VedhikForm({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  const result = v.save();
  console.log(result);
  res.send("Post API");
});

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID API");
});

module.exports = router;
