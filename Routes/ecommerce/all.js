const data = require('./../Data/ecommData.json');
var platforms = [];
var headers = [];

for(var i = 0; i < data.headers.length; i++ ){
  headers.push(data.headers[i])
}

for(var i = 0; i < data.platforms.length; i++ ){
  if (data.platforms[i].typeid == 1){
    platforms.push(data.platforms[i])
  }
}

module.exports = (req, res) => {

  res.status(200).json({ platforms, headers });
};