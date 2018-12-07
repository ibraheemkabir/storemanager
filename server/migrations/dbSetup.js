import { Client } from 'pg';
import dotenv from 'dotenv';
import setupTables from './dbSetupQuery';

dotenv.config();

export default config;

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEV,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    define,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    define,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    logging: false,
    ssl: true,
    operatorsAliases: false,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
    define,
  },
};

const client = new Client();
client.query(setupTables, (error) => {
  console.log('error', error);
  client.end();
});
client.connect();