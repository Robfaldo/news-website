const express = require('express')
const app = express();
const axios = require('axios');
var path = require('path');
var ApiService = require('./services/apiService');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var homePageRouter = require('./routes/homepage.js');
var searchRouter = require('./routes/search.js');
app.use('/', homePageRouter);
app.get('/search', searchRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port 8080!');
});

module.exports = app;
