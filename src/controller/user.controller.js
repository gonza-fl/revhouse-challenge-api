const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const userCreated = await userService.createUser(req.body);
    return res.status(201).json(userCreated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const allUsers = await userService.findAllUsers();
    if (!allUsers.length) return res.status(404).json({ messge: 'Users not found' });
    return res.json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { userFound } = req;
  try {
    return res.json(userFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const {
    userFound,
    body: payload,
  } = req;
  try {
    await userService.updateUser(userFound, payload);
    return res
      .status(200)
      .json({ message: 'User updated successfully', userId: userFound.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { userFound: { id } } = req;
  try {
    await userService.deleteUser(id);
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
