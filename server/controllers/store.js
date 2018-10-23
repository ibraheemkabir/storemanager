/* eslint-disable class-methods-use-this */
import express from 'express'
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { category } from '../helpers/productarray';
import { Prods } from '../models/productsModel';
import { categoryarray } from '../models/productsModel';
import { orders } from '../models/productsModel';

class Products {

  addProduct(req, res) {
    const {name, category, price, size } = req.body;
    const newProduct = product.push(new Prods(product.length+1, name, category, price, size));
    return res.status(201).send({
      success: 'true',
      message: 'product added successfuly',
      product,
    });
  }

  getProducts(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'poducts retrieved successfuly',
      product,
    });
  }

  deleteproduct(req, res) {
    const arr = product.findIndex(c => c.id === parseInt(req.params.id, 10));
    const products = arr;
    if (products!=-1) {
      product.splice(products, 1);
      return res.status(200).send({
        success: 'true',
        message: 'product deleted successfuly',
        products,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'product not found',
    });
  }

  getproduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const arr = product.find(c => c.id === parseInt(req.params.id, 10));
    const result = arr;
    if (arr) {
      return res.status(200).send({
        success: 'true',
        message: 'product retrieved successfully',
        products_list: result,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: `product with the id ${id} does not exist`,
    });
  }


  updateproduct(req, res) {
    const arr = product.findIndex(c => c.id === parseInt(req.params.id, 10));
    if (arr === -1) {
      return res.status(404).send({
        success: 'false',
        message: 'product not found',
      });
    }
    const updatedproduct = {
      id: parseInt(req.params.id, 10),
      name: req.body.name || arr.name,
      category: req.body.category || arr.category,
      size: req.body.size || arr.size,
      price: req.body.price || arr.price,
    };

    product.splice(arr, 1, updatedproduct);

    return res.status(200).send({
      success: 'true',
      message: 'product updated successfully',
      updatedproduct,
    });
  }

  addcategory(req, res) {
    const { Category } = req.body;
    const newcategory = category.push(new categoryarray(category.length+1, Category));
    return res.status(201).send({
      success: 'true',
      message: 'category added successfuly',
      category,
    });
  }

  getcategories(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'categories retrieved successfuly',
      category,
    });
  }


  newOrder(req, res) {
    const { productsId } = req.body;
    const { total } = req.body;
    const neworder = Order.push(new orders(Order.length+1, productsId, total));
    return res.status(201).send({
      success: 'true',
      message: 'order created successfuly',
      Order,
    });
  }

  getorders(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'orders retrieved successfuly',
      Order,
    });
  }


}

const Queries = new Products();
export default Queries;
