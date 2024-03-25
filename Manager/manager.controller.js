const express = require("express");
const router = express.Router();
const managerService = require("./manager.service");

router.post("/saveManager", async (req, res) => {
  await managerService.addManager(req.body);
  res.status(201).send(req.body);
});

module.exports = router;
