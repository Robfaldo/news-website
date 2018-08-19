var express = require('express');
var router = express.Router();
var ApiService = require('../services/apiService');

router.get('/', async (req, res) => {
  const articles = await ApiService.requestData({queryString: ""})
  res.render('index', {
    articles: articles,
  })
});

module.exports = router;
