import config from 'dotenv';

import bodyParser from 'body-parser';

import express from 'express';

config.config()


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import products from './server/routes/products';
import home from './server/routes/index';
import categories from './server/routes/products';

app.use('/api/v1/', categories);
app.use('/api/v1/', products);
app.use('/', home);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
  console.log('Listening on port...');
});

module.exports = app;
