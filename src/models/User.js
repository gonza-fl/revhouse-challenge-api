const { STRING, VIRTUAL, BOOLEAN } = require('sequelize');
const sequelize = require('../database');
const Participation = require('./Participation');

const User = sequelize.define('users', {
  name: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  fullName: {
    type: VIRTUAL,
    get() {
      return `${this.name} ${this.lastName}`
    },
  },
  deleted: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

User.hasOne(Participation);
Participation.belongsTo(User);

module.exports = User;
