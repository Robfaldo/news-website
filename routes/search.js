var express = require('express');
var router = express.Router();
var ApiService = require('../services/apiService');

router.get('/search', async (req, res) => {
  const queryString = req.query.querystring
  const articles = await ApiService.requestData({queryString: queryString});
  res.render('index', {
    articles: articles,
  })
});

module.exports = router;
