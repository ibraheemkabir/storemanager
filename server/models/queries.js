import express from 'express';

import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { catigory } from '../helpers/productarray';
import { Prods } from './productsModel';
import { category } from './productsModel';
import { orders } from './productsModel';

export default class queries {

  static async addProduct(req,res,next) {
    const { name, category, price, size } = req.body ;
    const newProduct = product.push(new Prods(product.length,name,category,price,size));
    return next();
  }

  static async allProducts(req, res,next) {
    return next();
  }

  static async deleteproduct(req, res, next) {
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
    const products = await (arr);
    return next();
  }

  static async getproduct(req, res,next) {
    const id = parseInt(req.params.id, 10);
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
    return next();
  }


  static async updateproduct(req, res,next) {
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
    return next();
    }
  

  static async addcategory(req, res) {
    const { Category } = req.body ;
    const newcategory = catigory.push(new category(catigory.length,Category));
  }

  static async getcategories(req, res) {
  }


  static async newOrder(req, res) {
    const { productsId } = req.body;
    const { total } = req.body;
    const neworder = Order.push(new orders(Order.length,productsId,total));
  }

  static async allorders(req, res) {
  }
}
