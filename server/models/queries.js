import express from 'express';
import client from '../helpers/connection';
import { createDecipher } from 'crypto';



export default class queries {
  constructor({ name, category, price, image, quantity, productsId, Total, attendantId}) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
    this.productsId = productsId;
    this.Total = Total;
    this.attendantId = attendantId;
    this.quantity = quantity;
  }

  async addProduct() {
    const addProductQuery = 'INSERT INTO products("name", category, "price", "image", "quantity", "created") VALUES($1, $2, $3, $4, $5, CURRENT_TIMESTAMP) RETURNING *';
    const addProduct = await client.query(addProductQuery, [this.name, this.category, this.price, this.image, this.quantity]);
    return addProduct.rows[0];
  }

  async getAllProducts() {
    const getAllProductsQuery = 'SELECT * FROM public.products';
    const getAllProducts = await client.query(getAllProductsQuery);
    return getAllProducts.rows;
  }

  async deleteProduct(id) {
    const deleteProduct = await client.query(`DELETE FROM products WHERE "Id" = ${id}`);
    if (deleteProduct.rowCount === 0) throw new Error('entry not found');
    return deleteProduct.rows;
  }

  async getProduct(id) {
    const getProduct = await client.query(`SELECT * FROM products WHERE "Id" = ${id}`);
    return getProduct.rows[0]; 
  }


  async updateProduct(id) {
    const updateProduct = await client.query(`UPDATE products SET name='${this.name}', price='${this.price}', image='${this.image}', category='${this.category}', quantity='${this.quantity}', edited=CURRENT_TIMESTAMP WHERE Id=${id} RETURNING *`);
    return updateProduct;
    }
  

  async addCategory() {
    const addCategory = 'INSERT INTO categories("category","created") VALUES($1,CURRENT_TIMESTAMP) RETURNING *';
    const addCategories = await client.query(addCategory, [this.category]);
    return addCategories.rows[0];
  }

  async getCategories() {
    const getCategories = 'SELECT  * FROM categories';
    const getAllCategories = await client.query(getCategories);
    return getAllCategories;
  }

  async deleteCategory(id) {
    const deleteCategory = await client.query(`DELETE FROM categories WHERE "id" ='${id}'`);
    if (deleteCategory.rowCount === 0) throw new Error('category not found');
    return deleteCategory.rows;
  }


  async newOrder() {
    const addnewOrderQuery = 'INSERT INTO orders("productsId", "Total", "Attendantid", "quantity", "created") VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *';
    const addnewOrder = await client.query(addnewOrderQuery, [this.productsId, this.Total, this.attendantId, this.quantity]);
    return addnewOrder.rows[0];
  }

  async getattendantOrder(id) {
    const getattendantOrder = `SELECT * FROM orders WHERE "id"=${id}`;
    const getorder = await client.query(getattendantOrder);
    return getorder.rows;
  }

  async allorders() {
    const getallOrders = 'SELECT  * FROM orders';
    const order = await client.query(getallOrders);
    return order.rows;
  }

}
