const router = require('express').Router();
const {
  getUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controller/user.controller.js');

router
  .post('/user', createUser)
  .get('/users', getUsers)
  .patch('/user/:id', updateUser)
  .get('/user/:id', getUserById)
  .delete('/user/:id', deleteUser);

module.exports = router;
