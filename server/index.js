const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/auth");

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      mnumber: req.body.mnumber,
      password: req.body.password,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "Duplicate email." });
  }
  res.json({ status: "Ok" });
});

app.post("/login", async (req, res) => {
  console.log(req.body);

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      "secret124"
    );
    res.json({
      status: "Ok",
      message: "Logged in successful",
      user: true,
      accessToken: token,
    });
  } else {
    res.json({ status: "Error", message: "User not found", user: false });
  }
});

app.listen(1998, () => console.log("server is running at 1998"));
