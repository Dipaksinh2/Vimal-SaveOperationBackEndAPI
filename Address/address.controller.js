const express = require("express");
const router = express.Router();
const addressService = require("./address.service");

router.post("/saveAddress", async (req, res) => {
  await addressService.addWorkAddress(req.body);
  res.status(201).send("WorkAddress Details Saved.");
});

module.exports = router;
