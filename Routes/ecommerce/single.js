const data = require('./../Data/ecommData.json');

module.exports = (req, res) => {
  const typeid = req.params.typeid * 1;
  const type = data.types.find(m => m.typeid === typeid);

  res.status(200).json({ type });
};