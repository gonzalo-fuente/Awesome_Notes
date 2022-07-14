const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password)
    return res
      .status(400)
      .json({ "message": "Username and password are required." });

  try {
    const foundUser = await User.findOne({
      where: { username: user },
    });

    if (!foundUser?.dataValues) {
      return res.sendStatus(401); //Unauthorized
    }

    // evaluate password
    const match = await bcrypt.compare(password, foundUser.dataValues.password);
    if (match) {
      // create JWTs
      const accessToken = jwt.sign(
        {
          "UserInfo": {
            "username": foundUser.dataValues.username,
          },
        },
        //expiration of access token
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2h" }
      );
      // Send authorization roles and access token to user
      res.json({ accessToken });
    } else {
      res.sendStatus(401); //Unauthorized
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { handleLogin };
