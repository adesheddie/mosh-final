const express = require('express');
const app = express();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

require('./startup/logging')();
require('./startup/routers')(app);
require('./startup/db')();
// require('./startup/configs')();

if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT || 3001);
  }

console.log('Node Running for Movies API');
module.exports = app;