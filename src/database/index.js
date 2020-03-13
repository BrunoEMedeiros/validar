const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const user = require('../models/Users');

const connection = new Sequelize(dbConfig);

user.init(connection);

module.exports = connection;