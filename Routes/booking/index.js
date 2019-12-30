const booking = require('express').Router();
const all = require('./all');


booking.get('/', all);

module.exports = booking;