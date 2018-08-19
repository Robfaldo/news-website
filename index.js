const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const homePageRouter = require('./routes/homepage.js');
const searchRouter = require('./routes/search.js');

app.use('/', homePageRouter);
app.get('/search', searchRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port 8080!');
});

module.exports = app;
