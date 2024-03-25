const express = require("express"),
  router = express.Router();

const userService = require("./user.service");

router.get("/getUser", async (req, res) => {
  const users = await userService.getUsers();
  res.send(users);
});

router.post("/saveUser", async (req, res) => {
  await userService.addUser(req.body);
  res.status(201).send(req.body);
});

module.exports = router;
