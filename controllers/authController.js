const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.json({ error: "Credenciales incorrectas" });

  const passwordMatch = await bcryptjs.compare(req.body.password, user.password);
  const token = jwt.sign({ sub: user._id, username: user.username }, process.env.JWT_SIGN_SECRET);


  return res.json({ token, username: user.username, id: user.id, img: user.img });
}

async function signUp(req, res) {
  try {
    const password = req.body.password;

    if (!password || typeof password !== "string") {
      return res.status(400).json({ error: "Invalid password" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.error("Error in signUp:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { login, signUp };
