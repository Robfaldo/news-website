const axios = require('axios');

const ftApiQuery = function(query) {
  const apiQueryResults = new Promise(function(resolve, reject) {
    axios({
      method: 'post',
      url: 'http://api.ft.com/content/search/v1',
      params: {'HTTP_CONTENT_LANGUAGE': 'application/json'},
      headers: {
        'X-Api-Key': '59cbaf20e3e06d3565778e7b3cf30e4ecd1d4acc8ad7c328aa6c76bb',
        'Content-Type': 'application/json'
      },
      data: {
        "queryString": query.queryString,
        "resultContext" : {
           "aspects" :[  "title","lifecycle","location","summary","editorial" ]
         }
      }
      })
    .then(response => {
      const articles = response.data.results[0].results
      resolve(articles)
    })
    .catch(error => {
      console.log(error);
    });
  });
  return apiQueryResults;
}

module.exports = ftApiQuery;
