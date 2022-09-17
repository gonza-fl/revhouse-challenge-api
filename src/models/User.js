const { INTEGER, STRING, VIRTUAL, BOOLEAN } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('users', {
  name: {
    type: STRING,
    allownull: false,
  },
  lastName: {
    type: STRING,
    allownull: false,
  },
  fullName: {
    type: VIRTUAL,
    get: () => this.name + this.lastName,
  },
  percent: {
    type: INTEGER,
    allownull: false,
  },
  deleted: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
