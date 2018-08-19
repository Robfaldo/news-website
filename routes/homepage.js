const express = require('express');
const ApiService = require('../services/apiService');

const router = express.Router();

router.get('/', async (req, res) => {
  const articlesFromApi = await ApiService.requestData({ queryString: '' });
  res.render('index', {
    articles: articlesFromApi,
  });
});

module.exports = router;
