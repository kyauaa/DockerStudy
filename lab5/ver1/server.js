'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Date
var d =  new Date();
var datetime = d.toLocaleTimeString();

console.log(d)

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world, Now is ' + datetime + '. \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

