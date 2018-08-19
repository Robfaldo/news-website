const express = require('express')
const app = express();
const axios = require('axios');
var path = require('path');
var ApiService = require('./services/apiService');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var homePageRouter = require('./routes/homepage.js');
app.use('/', homePageRouter);

app.get('/search', async (req, res) => {
  const queryString = req.headers.querystring
  const articles = await ApiService.requestData({queryString: queryString});
  res.send(articles);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port 8080!');
});

module.exports = app;
