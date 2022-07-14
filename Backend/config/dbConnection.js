const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.DB_NAME;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

const sequelize = new Sequelize(DB, USER, PASS, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
