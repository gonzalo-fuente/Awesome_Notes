const { User } = require("../models");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ "message": "Email and password are required." });

  // check for duplicate emails in the db
  try {
    const duplicate = await User.findOne({ where: { email } });
    if (duplicate) {
      return res.sendStatus(409); //Conflict
    }

    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await User.create({
      "email": email,
      "password": hashedPwd,
    });

    res.status(201).json({ "success": `New user ${email} created!` });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { handleNewUser };
