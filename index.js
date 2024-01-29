
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const routes = require('./routes/routes.js')(app, fs);
