const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 



let requestTime= requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)