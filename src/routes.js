const express = require('express');
const UserController = require('./controllers/UserController');
const LoginController =  require('./controllers/LoginController')
const NivelController = require('./controllers/NivelController');
const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/index', UserController.index);
routes.post('/users/:usr_id/login', LoginController.store);
routes.get('/logar', LoginController.logar);
routes.post('/nivel', NivelController.store);

module.exports = routes;