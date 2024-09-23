const Router = require('express').Router();

const apiRouteController = require('../controller/user/apiRouteController');
Router.get('/api', apiRouteController);
module.exports = Router;