const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {
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

module.exports = eVedhikRoutes = router;
