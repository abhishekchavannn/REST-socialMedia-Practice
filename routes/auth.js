const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");
//Register
//async function and await is like
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const User = await newUser.save();
    res.status(200).json(User);
  } catch (err) {
    res.status(500).json(wee)
  }

  // const User = await new user({
  //     username:"seiphonx",
  //     email:"chavanabhishek527@gmail.com",
  //     password:"chavan123"
  // })
  // //save writes into the database
  // await User.save();
  // res.send("Worked")
});

//login
router.post("/login", async (req, res) => {
  try {
    const User = await user.findOne({ username: req.body.username });
    !User && res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(req.body.password, User.password)
    !validPassword && res.status(400).json('Wrong Password');

    res.status(200).json(User);
  } catch (err) {
     res.status(500).json(err);
  }
});

module.exports = router;
