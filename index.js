const express = require('express')
const app = express();
const axios = require('axios');
var path = require('path');
var ApiService = require('./services/apiService');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  const articles = await ApiService.requestData({queryString: ""})
  res.render('index', {
    articles: articles,
  })
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port 8080!')
});

module.exports = app;
