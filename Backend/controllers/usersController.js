const { User } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0)
      return res.status(204).json({ "message": "No users found." });
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ "message": "User ID required" });

  const id = req.body.id;

  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(204).json({ "message": `User ID ${id} not found` });
    }

    const result = await User.destroy({ where: { id } });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ "message": "User ID required" });

  const id = req.params.id;

  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(204).json({ "message": `User ID ${id} not found` });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
  getUser,
};
