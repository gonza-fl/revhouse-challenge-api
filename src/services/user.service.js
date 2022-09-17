const User = require('../models/User');

const Query = {
  updateUser: (id) => ({
    where: {
      userId: id,
    },
  }),
  findAllUsers: {
    where: {
      deleted: false,
    },
  },
};

const createUser = () => User.create(payload);
const findAllUsers = () => User.findAll(Query.findAllUsers);
const findUserById = ({ id }) => User.findByPk(id);
const updateUser = ({ id, ...payload }) => User.update(payload, Query.updateUser(id));
const deleteUser = ({ id }) => User.update({ deleted: true }, Query.updateUser(id));

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
};
