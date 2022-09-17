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
    if (!allUsers) return res.status(404).json({ messge: 'Users not found' });
    return res.json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userFound = await userService.findUserById(req.body);
    if (!userFound) return res.status(404).json({ message: 'Users not found' });
    return res.json(userFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser();
    if (!updatedUser)
      return res.status(404).json({ message: 'User not found' });
    return res
      .status(200)
      .json({ message: 'User deleted successfully', user: updateUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deltedUser = await userService.deleteUser();
    if (!deltedUser) return res.status(404).json('User not found');
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
