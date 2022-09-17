require('dotenv/config');
const Sequelize = require('sequelize');

const { DB_NAME, USER_DB, PASSWORD_DB, HOST_DB } = process.env;

const sequelize = new Sequelize(DB_NAME, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
