const express = require("express");
const router = express.Router();
const VedhikSchema = require("../repository/schema/User");

exports.register = () => {
  router.post("", (req, res, next) => {
    const v = new VedhikSchema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });

    const result = v.save();
    res.send("Post API");
  });
};
