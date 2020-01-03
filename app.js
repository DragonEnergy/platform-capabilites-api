// Bring in our dependencies
const express = require('express')
const routes = require('./routes')
const PORT = process.env.PORT || 5000

//  Connect all our routes to our application
express()
  .use('/api', routes)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))