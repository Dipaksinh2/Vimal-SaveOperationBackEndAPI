const express = require("express");
const router = express.Router();
const profileService = require("./profile.service");

router.post("/saveProfile", async (req, res) => {
  await profileService.addProfile(req.body);
  res.status(201).send("Social Profile Details Saved.");
});
module.exports = router;
