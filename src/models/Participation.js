const { INTEGER, STRING } = require('sequelize');
const sequelize = require('../database');

const Participation = sequelize.define('participations', {
  percent: {
    type: INTEGER,
    allowNull: false,
  },
  color: {
    type: STRING
  },
});

module.exports = Participation;
