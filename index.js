const express = require('express')
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  axios({
    method: 'post',
    url: 'http://api.ft.com/content/search/v1',
    params: {'HTTP_CONTENT_LANGUAGE': 'application/json'},
    headers: {
      'X-Api-Key': '59cbaf20e3e06d3565778e7b3cf30e4ecd1d4acc8ad7c328aa6c76bb',
      'Content-Type': 'application/json'
    },
    data: {
      "queryString": "banks",
      "resultContext" : {
         "aspects" :[  "title","lifecycle","location","summary","editorial" ]
       }
    }
    })
  .then(response => {
    allResponses = response.data.results[0].results
    const justTitles = allResponses.map( result => result.title.title )
    res.render('index', {
      titles: justTitles
    })
  })
  .catch(error => {
    console.log(error);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port 8080!')
});

module.exports = app;
