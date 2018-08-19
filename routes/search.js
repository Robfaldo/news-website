var express = require('express');
var router = express.Router();
var ApiService = require('../services/apiService');

router.get('/search', async (req, res) => {
  const queryString = req.headers.querystring
  const articles = await ApiService.requestData({queryString: queryString});
  res.send(articles);
});

module.exports = router;
