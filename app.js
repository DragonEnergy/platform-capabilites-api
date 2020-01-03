// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');

var port = process.env.PORT || 8080;

//  Connect all our routes to our application
app.use('/api', routes);

// Turn on that server!
app.listen(port, () => {
  console.log('App running on http://localhost:' + port);
});