import config from 'dotenv';

import bodyParser from 'body-parser';

import express from 'express';

import cookieParser from 'cookie-parser';

import cors from 'cors';

config.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false , limit:'50mb'}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
import products from './server/routes/products';
import home from './server/routes/index';
import users from './server/routes/users';

app.use('/api/v1/users/', users);
app.use('/api/v1/', products);
app.use('/', home);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
  console.log('Listening on port...');
});

module.exports = app;
