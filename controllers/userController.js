const User = require("../models/User");

async function index(req, res) {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
  
    return res.status(500).json({ error: "Failed to fetch users" });
  }
}

async function editUser(req, res) {
  try {
    const { id } = req.params;
    const { username, firstname, lastname, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, firstname, lastname, email },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error editing user:", error);

    return res.status(500).json({ error: "Failed to edit the user" });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by id:", error);

    return res.status(500).json({ error: "Failed to fetch user" });
  }
}

async function show(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username }).populate("orders");

    return res.json(user);
  } catch (error) {
    console.log("No se pudo cargar el usuario");
  }
}

async function editOneUser(req, res) {
  try {
    const { username } = req.params;
    const updatedUserNewData = await User.findOneAndUpdate(
      { username: username },
      {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
      },
    );

    if (!updatedUserNewData) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(updatedUserNewData);
  } catch (error) {
    console.error("Error editing user:", error);

    return res.status(500).json({ error: "ACA ESTÁ EL ERROR" });
  }
}

module.exports = { index, editUser, getUserById, show, editOneUser };
