const express = require('express');
const ApiService = require('../services/apiService');

const router = express.Router();

router.get('/search', async (req, res) => {
  const queryFromSearch = req.query.querystring;
  const articlesFromApi = await ApiService.requestData({ queryString: queryFromSearch });
  res.render('index', {
    articles: articlesFromApi,
  });
});

module.exports = router;
