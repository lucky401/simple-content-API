const { Router } = require('express');

const routes = Router();

require('./routes/content')(routes);

module.exports = routes;
