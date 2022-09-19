const router = require('express').Router();
const {
  getUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controller/user.controller');
const {
  createValidations,
  getByIdValidations,
  patchValidations,
} = require('../middleware/user.middlewares');

router
  .post('/', createValidations, createUser)
  .get('/', getUsers)
  .get('/:id', getByIdValidations, getUserById)
  .patch('/:id', patchValidations, updateUser)
  .delete('/:id', patchValidations, deleteUser);

module.exports = router;
