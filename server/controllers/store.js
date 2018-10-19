import express from 'express';

import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { catigory } from '../helpers/productarray';
import { Prods } from '../models/productsModel';
import { category } from '../models/productsModel';
import { orders } from '../models/productsModel';
import queries from '../models/queries';

export default class Products {

  static async addProduct(req, res) {
    const newProduct = queries.addProduct;
    const products = await (newProduct);
    return res.status(201).send({
      success: 'true',
      message: 'product added successfuly',
      product,
    });
  }

  static async allProducts(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'poducts retrieved successfuly',
      product,
    });
  }

  static async deleteproduct(req, res) {
    const delproduct = queries.addProduct;
    const products = await (delproduct);
    if (products) {
      product.splice(products.id, 1);
      return res.status(200).send({
        success: 'true',
        message: 'product deleted successfuly',
        products,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'product not found',
      arr,
    });
  }

  static async getproduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
    const produc = await (arr);
    if (arr) {
      return res.status(200).send({
        success: 'true',
        message: 'product retrieved successfully',
        products_list: produc,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: `product with the id ${id} does not exist`,
    });
  }


  static async updateproduct(req, res) {
    const update = queries.updateproduct;
    const arr = await (update);
    if (!arr) {
      return res.status(404).send({
        success: 'false',
        message: 'product not found',
      });
    }

    if (!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'name is required',
      });
    } if (!req.body.category) {
      return res.status(400).send({
        message: 'category is required',
      });
    }

    const updatedproduct = {
      id: parseInt(req.params.id, 10),
      name: req.body.name || arr.name,
      category: req.body.category || arr.category,
    };

    product.splice(arr, 1, updatedproduct);

    return res.status(200).send({
      success: 'true',
      message: 'product updated successfully',
      updatedproduct,
    });
  }

  static async addcategory(req, res) {
    const { Category } = req.body ;
    const newcategory = catigory.push(new category(catigory.length,Category));
    const categorys = await (newcategory);
    return res.status(201).send({
      success: 'true',
      message: 'category added successfuly',
      catigory,
    });
  }

  static async getcategories(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'categories retrieved successfuly',
      catigory,
    });
  }


  static async newOrder(req, res) {
    const { productsId } = req.body;
    const { total } = req.body;
    const neworder = Order.push(new orders(Order.length,productsId,total));
    const order = await (neworder);
    return res.status(201).send({
      success: 'true',
      message: 'order created successfuly',
      Order,
    });
  }

  static async allorders(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'orders retrieved successfuly',
      Order,
    });
  }
}
