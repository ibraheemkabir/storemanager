import express from 'express';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { category } from '../helpers/productarray';
import { Prods } from '../models/productsModel';
import { categoryArray } from '../models/productsModel';
import { orders } from '../models/productsModel';
import  queries  from '../models/queries';
import { client } from '../helpers/connection';

class Products {

  static async addProduct(req, res) {
    const { name , category ,price, image, quantity} = req.body;
    const add = new queries({name , category, price, image, quantity});
;    const newProduct = await add.addProduct();
    return res.status(201).send({
      success: 'true',
      message: 'product added successfuly',
      newProduct,
    });
  }

  static async getAllProducts(req, res) {
    const { name , category ,price, image, quantity} = req.body;
    const add = new queries({name , category, price, image, quantity});
    const product = await add.getAllProducts();
    return res.status(200).send({
      success: 'true',
      message: 'poducts retrieved successfuly',
      product,
    });
  }

  static async deleteProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name , category ,price, image, quantity} = req.body;
    const add = new queries({name , category, price, image, quantity});
    const product = await add.deleteProduct(id);
    return res.status(400).send({
      success: 'true',
      message: 'product deleted successfully',
      product,
    });
  }

  static async getProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name , category ,price, image, quantity} = req.body;
    const add = new queries({name , category, price, image, quantity});
    const product = await add.getProduct(id);
    if (product) {
      return res.status(200).send({
        success: 'true',
        message: 'product retrieved successfully',
        products: product,
      });
    }
    return res.status(400).send({
      success: 'false',
      message: `product with the id ${id} does not exist`,
    });
  }

  static async updateProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name , category ,price, image, quantity} = req.body;
    const add = new queries({name , category, price, image, quantity});
    const product = await add.updateProduct(id);    
    const products = product.rows;
    if (product.rowCount===0) {
      return res.status(400).send({
        success: 'false',
        message: 'product not found',
      });
    }

    return res.status(200).send({
      success: 'true',
      message: 'product updated successfully',
      products,
    });
  }

  static async addCategory(req, res) {
    const { category } = req.body;
    const add = new queries({category});
    const categories = await add.addCategory(); 
    return res.status(201).send({
      success: 'true',
      message: 'category added successfuly',
      categories,
    });
  }

  static async getAllCategories(req, res) {
    const { name , category ,price, image, quantity} = req.body;
    const add = new queries({name , category, price, image, quantity})
    const categories = await add.getCategories();
    return res.status(200).send({
      success: 'true',
      message: 'categories retrieved successfuly',
      categories,
    });
  }

  static async deleteCategory(req, res) {
    const id = parseInt(req.params.id, 10);
    const { category } = req.body;
    const add = new queries({ category });
    const product = await add.deleteCategory(id);
    return res.status(400).send({
      success: 'true',
      message: 'Category deleted successfully',
      product,
    });
  }


  static async newOrder(req, res) {
    const { userId } = req;
    const { productsId , Total,quantity } = req.body;
    let attendantId=userId;
    const add = new queries({productsId , Total, attendantId, quantity })
    const Order = await add.newOrder();
    return res.status(201).send({
      success: 'true',
      message: 'order created successfuly',
      Order,
    });
  }

  static async getAttendantorder(req, res) {
    const { userId } = req;
    const { userpriv } = req;
    let userid = userId;
    const id = parseInt(req.params.id, 10);
    const { productsId , Total, attendantId, quantity} = req.body;
    const add = new queries({productsId , Total, attendantId, quantity});
    const Order = await add.getattendantOrder(id);
    if(userid === Order[0].Attendantid || userpriv === 1 ){
      return res.status(201).send({
        success: 'true',
        message: 'order retrieved successfuly',
        Order,
      });
    }else{
      return res.status(403).send({
        success: 'false',
        message: 'You are not allowed to view this order',
      });
    }
   
  }

  static async getAllOrders(req, res) {
    const id = parseInt(req.params.id, 10);
    const { productsId , Total, attendantId, quantity} = req.body;
    const add = new queries({productsId , Total, attendantId, quantity});
    const Orders = await add.allorders();
    return res.status(200).send({
      success: 'true',
      message: 'orders retrieved successfuly',
      Orders,
    });
  }


}

export default Products;
