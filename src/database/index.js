const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const user = require('../models/Users');
const login = require('../models/Login');
const nivel = require('../models/Nivel');

const connection = new Sequelize(dbConfig);

nivel.init(connection);
user.init(connection);
login.init(connection);


login.associate(connection.models);

module.exports = connection;