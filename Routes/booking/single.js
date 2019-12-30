const all = require('./all');
const data = require('./../Data/bookingData.json');

module.exports = (req, res) => {
  const typeid = req.params.typeid * 1;
  const type = data.types.find(m => m.typeid === typeid);

  res.status(200).json({ type });
};