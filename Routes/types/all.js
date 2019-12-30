const data = require('./../Data/bookingData.json');

module.exports = (req, res) => {
  const types = data.types;

  res.status(200).json({ types });
};