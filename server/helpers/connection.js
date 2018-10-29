import dotenv from 'dotenv';
import pg from 'pg';
import { Client } from 'pg';

const client = new pg.Client({
    host: 'localhost',
    user: 'User',
    password: 'root',
    database: 'store',
});

client.connect();
const query = client.query('INSERT INTO public.categories(category) VALUES($1)', ['EH']);

export default client;