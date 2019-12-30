const routes = require('express').Router();
const platforms = require('./platforms')
const type = require('./types')
const ecommerce = require('./ecommerce')
const booking = require('./booking')
var cors = require('cors');

routes.use(cors())

routes.use('/ecommerce', ecommerce);
routes.use('/platforms', platforms);
routes.use('/types', type);
routes.use('/booking', booking);
routes.use('/ecommerce', ecommerce);

module.exports = routes;
