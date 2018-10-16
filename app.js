import config from 'dotenv';

config.config()

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const products = require('./server/routes/products');
const home = require('./server/routes/index');

app.use('/api/v1/', products);
app.use('/api/v1/', home);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
  console.log('Listening on port...');
});

module.exports = app;
