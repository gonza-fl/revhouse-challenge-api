const User = require('../models/User');
const Participation = require('../models/Participation');
const Query = require('./queries');

const createUser = async ({ percent: per, color: cl = 'gray', ...payload }) => {
  const userCreated = await User.create(payload);
  const { color, percent } = await userCreated.createParticipation({
    percent: per,
    color: cl,
  });
  return {
    ...userCreated.dataValues,
    fullName: userCreated.fullName,
    participation: { color, percent },
  };
};
const findAllUsers = async () =>
  User.findAll(Query.includes(Participation, true, ['color', 'percent']));
const findUserById = (id) =>
  User.findByPk(id, Query.includes(Participation, true, ['color', 'percent']));
const updateUser = async (userFound, { percent, color, ...userPayload }) => {
  await userFound.update(userPayload);
  const userParticipation = await userFound.getParticipation();
  if (percent || color)
    await userParticipation.update({
      percent,
      color,
    });
  return userFound;
};
const deleteUser = (id) => User.update({ deleted: true }, Query.updateUser(id));

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
};
