import dotenv from 'dotenv';
import setupTables from '../migrations/dbSetupQuery';
import { Client } from 'pg';

dotenv.config();

const config = {
  development: {
    connectionString: process.env.DATABASE_URL,
    ssl:true,
  },
  test: {
    connectionString: process.env.DATABASE_URL_test,
    ssl:true,
  },
};


const client = new Client(config.development);


client.connect();
client.query(setupTables);

export default client;