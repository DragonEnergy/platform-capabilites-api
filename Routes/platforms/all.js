const data = require('./../Data/bookingData.json');

module.exports = (req, res) => {
  const platforms = data.platforms;
  const headers = data.headers;

  res.status(200).json({ platforms, headers });
};