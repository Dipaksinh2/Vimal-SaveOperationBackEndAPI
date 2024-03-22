const express = require("express"),
  router = express.Router();

const deptService = require("./department.service");

router.get("/getDept", async (req, res) => {
  const dept = await deptService.getDepartments();
  res.send(dept);
});

module.exports = router;
