import dotenv from 'dotenv';
import pg from 'pg';
import setupTables from '../migrations/dbSetupQuery';
import { Client } from 'pg';

const client = new pg.Client({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'store',
});

dotenv.config();

client.query(setupTables);
client.connect();
export default client;