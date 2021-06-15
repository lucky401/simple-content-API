const { Sequelize } = require('sequelize');

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_DRIVER } = process.env;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DRIVER,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = db;
