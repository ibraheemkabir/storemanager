const attendants = `
CREATE TABLE IF NOT EXISTS attendants(
  id SERIAL PRIMARY KEY,
  "firstname" VARCHAR(100) NOT NULL,
  "lastname" VARCHAR(100) NOT NULL,
   email TEXT UNIQUE NOT NULL,
   "age" VARCHAR(100) NOT NULL,
   "emergency_contact" VARCHAR(100) NOT NULL,
   "phonenumber" INTEGER UNIQUE NOT NULL,
   "address" INTEGER NOT NULL,
    "authId" INTEGER UNIQUE ,
    "Id" SERIAL UNIQUE,
    created timestamp (0) without time zone default now()
);`;

const authentication = `
CREATE TABLE IF NOT EXISTS authentication(
  id SERIAL PRIMARY KEY,
  username VARCHAR(150) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  "authorisation" INT NOT NULL,
  edited timestamp (0) without time zone default now()
);`;

const products = `
CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  "productId" INT,
  name TEXT ,
  "price" INT,
  "category" TEXT ,
  "image" TEXT ,
  "quantity" INT ,
  "productid" INT ,
  "Id" SERIAL UNIQUE,
  created timestamp (0) without time zone default now(),
  edited timestamp (0) without time zone default now()
);`;

const categories = `
CREATE TABLE IF NOT EXISTS categories(
  id SERIAL PRIMARY KEY,
  "category" TEXT NOT NULL,
  created timestamp (0) without time zone default now(),
  edited timestamp (0) without time zone default now() 
);`;

const orders = `
CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  "productsId" INT,
  "Total" INT,
  "Attendantid" INT,
  "quantity" INT,
  created timestamp (0) without time zone default now(),
  edited timestamp (0) without time zone default now()
   
);`;

const admin_del= `DELETE FROM authentication WHERE username='admin';`;

const value = "admin";
const admin= `INSERT INTO authentication (username,password,authorisation) values ('${value}','$2b$12$SAbHP1gVJNvkAh97GXEz5.uW5M7Wb4VhcyhCRm22hKssdJFrEUCr2',1);`;

const cat= `DELETE FROM categories WHERE category='testcategory';`;

const dropTables = `
DROP TABLE IF EXISTS authentication cascade;
DROP TABLE IF EXISTS attendants cascade;
DROP TABLE IF EXISTS products cascade;
DROP TABLE IF EXISTS categories cascade;
DROP TABLE IF EXISTS orders cascade;
`;


export default `${authentication}${attendants}${products}${categories}${orders}${admin_del}${admin}${cat}`;
export { dropTables };