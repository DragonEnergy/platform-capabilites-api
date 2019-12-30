const type = require('express').Router();
const single = require('./single');
const all = require('./all');

type.get('/:typeid', single);

type.get('/', all);

module.exports = type;