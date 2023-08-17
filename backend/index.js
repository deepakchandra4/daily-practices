const express = require("express");
const app = express();
const User = require("./db/User");
require("./db/config");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "SImple API" });
});

app.post("/register", async (req, res) => {
  const user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    res.send(user);
  } else {
    res.send({ message: "No user found" });
  }
});

app.get("/detail", async (req, res) => {
  const user = await User.findOne(req.body);
  res.send(user);
});

app.listen(5000, () => {
  console.warn("port is running at 5000");
});
