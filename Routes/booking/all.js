const data = require('./../Data/bookingData.json');
var platforms = [];
var headers = [];

for(var i = 0; i < data.headers.length; i++ ){
  headers.push(data.headers[i])
}

for(var i = 0; i < data.platforms.length; i++ ){
  if (data.platforms[i].typeid == 2){
    platforms.push(data.platforms[i])
  }
}

module.exports = (req, res) => {

  res.status(200).json({ platforms, headers });
};