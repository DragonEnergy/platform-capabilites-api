const data = require('./../Data/bookingData.json');

module.exports = (req, res) => {
  const platformid = req.params.platformid * 1;
  const platform = data.platforms.find(m => m.platformid === platformid);

  res.status(200).json({ platform });
};