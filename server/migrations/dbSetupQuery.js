const users = `
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  "fistname" VARCHAR(100) NOT NULL,
  "lastname" VARCHAR(100) NOT NULL,
   email TEXT UNIQUE NOT NULL,
  "authId" SERIAL UNIQUE ,
  ON DELETE CASCADE
);`;

const authentication = `
CREATE TABLE IF NOT EXISTS authentication(
  id SERIAL PRIMARY KEY,
  username VARCHAR(150) UNIQUE NOT NULL,
  password TEXT NOT NULL
  "Authorisation" VARCHAR(100) NOT NULL,
);`;

const products = `
CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  "productId" INT,
  name TEXT NOT NULL,
  "Price" INT,
  "category" TEXT NOT NULL,
  created timestamp (0) without time zone default now(),
  edited timestamp (0) without time zone default now(),
  ON DELETE CASCADE  
);`;

const categories = `
CREATE TABLE IF NOT EXISTS categories(
  id SERIAL PRIMARY KEY,
  "category" TEXT NOT NULL,
  created timestamp (0) without time zone default now(),
  edited timestamp (0) without time zone default now(),
  ON DELETE CASCADE  
);`;

const orders = `
CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  "productId" Array,
  "Total" INT,
  "AttendantId" INT,
  created timestamp (0) without time zone default now(),
  edited timestamp (0) without time zone default now(),
  CONSTRAINT FK_Entries_Users FOREIGN KEY ("AttendantId") REFERENCES users(authId)
  ON DELETE CASCADE  
);`;

const dropTables = `
DROP TABLE IF EXISTS authentication cascade;
DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS products cascade;
DROP TABLE IF EXISTS categories cascade;
DROP TABLE IF EXISTS "orders" cascade;
`;
export default `${authentication}${users}${products}${categories}${orders}`;
export { dropTables };