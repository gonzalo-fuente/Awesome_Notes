const { User } = require("../models");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password)
    return res
      .status(400)
      .json({ "message": "Username and password are required." });

  // check for duplicate usernames in the db
  try {
    const duplicate = await User.findOne({ where: { username: user } });
    if (duplicate) {
      return res.sendStatus(409); //Conflict
    }

    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await User.create({
      "username": user,
      "password": hashedPwd,
    });

    res.status(201).json({ "success": `New user ${user} created!` });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { handleNewUser };
