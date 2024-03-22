const express = require("express"),
  app = express(),
  body = require("body-parser");

require("express-async-errors");

const db = require("./database"),
  userRoutes = require("./UserInfo/user.controller"),
  deptRoutes = require("./Department/department.controller"),
  addressRoutes = require("./Address/address.controller"),
  managerRoutes = require("./Manager/manager.controller"),
  profileRoutes = require("./SocialProfile/profile.controller");

app.use(body.json());
app.use("/api/users", userRoutes);
app.use("/api/department", deptRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/manager", managerRoutes);
app.use("/api/profile", profileRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

//first make db connection
db.query("select 1")
  .then((data) => {
    console.log("Connection Established.");
    //start the server
    app.listen(3000, () => console.log("Server started on port 3000"));
  })
  .catch((err) => console.log("Connection Failed \n" + err));
