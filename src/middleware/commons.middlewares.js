const { validationResult } = require('express-validator');

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
        message: 'Validation Errors',
        errors: errors.errors
    });
  }
  next();
};

module.exports = {
  validationResult: validResult,
};
