'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Date
var d =  new Date();
var datetime = d.toLocaleTimeString();
var json = {
    date: datetime,
    timezone: 'utc',
    location: 'LHK F/12'
};

console.log(d)

// App
const app = express();
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

