const platforms = require('express').Router();
const all = require('./all');
const single = require('./single');

platforms.get('/:platformid', single);

platforms.get('/', all);

module.exports = platforms;