const axios = require('axios');

let ApiService = {

  requestData: function(query) {
    const url = 'http://api.ft.com/content/search/v1'
    const data = {
      "queryString": query.queryString,
      "resultContext" : {
         "aspects" :[  "title","lifecycle","location","summary","editorial" ]
       }
    }

    return new Promise(function(resolve, reject) {
      axios.post(url, data, {
        headers: {
          'X-Api-Key': '59cbaf20e3e06d3565778e7b3cf30e4ecd1d4acc8ad7c328aa6c76bb',
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        const articles = response.data.results[0].results
        resolve(articles)
      })
      .catch(error => {
        console.log(error);
      });
    });

  }
}

module.exports = ApiService;
