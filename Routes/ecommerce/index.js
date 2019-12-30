const ecommerce = require('express').Router();
const all = require('./all');


ecommerce.get('/', all);

module.exports = ecommerce;