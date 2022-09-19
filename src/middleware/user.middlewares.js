const { check } = require('express-validator');
const { validationResult } = require('./commons.middlewares');
const userService = require('../services/user.service');

const userExist = async (req, res, next) => {
  const { id } = req.params;
  const userFound = await userService.findUserById(id);
  if (!userFound || userFound.deleted)
    return res.status(404).json({
      message: 'User not found',
      userId: id,
    });
  req.userFound = userFound;
  next();
};

const fieldsRequired = check(
  ['name', 'lastName', 'percent'],
  'Properties required',
)
  .not()
  .isEmpty();

const maxLength = check(['color', 'name', 'lastName'], 'This fields can not be out of range 3 and 10')
  .trim()
  .isLength({ min: 3, max: 10 });

const limitsPercent = check(
  'percent',
  'Percent value can not be between 1 and 100',
).isFloat({ min: 1, max: 100 });

const deletedIsEmpty = check(
  'deleted',
  'You can not modify this property',
).isEmpty();

const commonsParameters = [deletedIsEmpty, maxLength, limitsPercent];

const getByIdValidations = [userExist, validationResult];
const createValidations = [
  fieldsRequired,
  ...commonsParameters,
  validationResult,
];
const patchValidations = [userExist, ...commonsParameters, validationResult];

module.exports = {
  createValidations,
  getByIdValidations,
  patchValidations,
};
