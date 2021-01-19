require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Listening on http://localhost:${port}`);
  });