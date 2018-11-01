import dotenv from 'dotenv';
import setupTables from '../migrations/dbSetupQuery';
import { Client } from 'pg';


dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl:true,
});


client.connect();
client.query(setupTables);

export default client;