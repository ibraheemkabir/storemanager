import express from 'express';

import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { Prods } from '../models/productsModel';

export default class Products {

  static async addProduct(req, res) {
    const { name, category, price, size } = req.body ;
    const newProduct = product.push(new Prods(product.length,name,category,price,size));
    const products = await (newProduct);
    return res.status(200).send({
      success: 'true',
      message: 'poducts retrieved successfuly',
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
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
    const products = await (arr);
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
    if (arr) {
      return res.status(200).send({
        success: 'true',
        message: 'product retrieved successfully',
        products_list: arr,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: `product with the id ${id} does not exist`,
    });
  }


  static async updateproduct(req, res) {
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
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

  static async newOrder(req, res) {
    const { productsId } = req.body;
    const neworder = Order.push(Order.length,productsId,total);
    const order = await (neworder);
    return res.status(200).send({
      success: 'true',
      message: 'orders created successfuly',
      order,
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
