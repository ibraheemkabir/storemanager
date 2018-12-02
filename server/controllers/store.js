import express from 'express';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import  queries  from '../models/queries';
import multer from 'multer';
import { client } from '../helpers/connection';

class Products {

  static async addProduct (req, res){   
    const { name , category ,price, quantity} = req.body;
    const image = req.file.path;
    const add = new queries({name , category, price, image, quantity});
    const newProduct = await add.addProduct();
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
    return res.status(200).send({
      success: 'true',
      message: 'product deleted successfully',
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
        product: product,
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
    const result = await add.getCategories();
    const categories = result.rows;
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
    return res.status(200).send({
      success: 'true',
      message: 'Category deleted successfully',
    });
  }


  static async newOrder(req, res) {
    const { userId } = req;
    const { productsId , Total,quantity } = req.body;
    let attendantId=parseInt(userId, 10);
    console.log(attendantId);
    const add = new queries({productsId , Total, attendantId, quantity })
    const Order = await add.newOrder();
    return res.status(201).send({
      success: 'true',
      message: 'order created successfuly',
      Order,
    });
  }

  static async updateOrder(req, res) {
    const id = parseInt(req.params.id, 10);
    const { userId } = req;
    const { productsId , Total,quantity } = req.body;
    let attendantId=parseInt(userId, 10);
    const add = new queries({productsId , Total, attendantId, quantity })
    const Order = await add.updateOrder(id);
    const myOrders = await add.getparticularOrder(id);
    let total=0;
    let attendant='';
    let date='';
    let cart=[];
    let product= '';   
    myOrders.forEach(element => {
      attendant=element.Attendantid;
      date=element.edited;   
      cart.push({'product': element.productid,'quantity': element.quantity,'price': element.Total*element.quantity})
    });
  
    cart.forEach(element=>{
      total+=element.price;
    })
    cart.push({'attendantId':attendant,'Date':date,'orderTotal':total});
    return res.status(201).send({
      success: 'true',
      message: 'product added to order successfully',
      cart,
    });
  }

  static async getAttendantorder(req, res) {
    const { userId } = req;
    const { userpriv } = req;
    let userid = userId;
    const id = parseInt(req.params.id, 10);
    const { productsId , Total, attendantId, quantity} = req.body;
    const add = new queries({productsId , Total, attendantId, quantity});
    const myOrders = await add.getattendantOrder(id);
    let total=0;
    let attendant='';
    let products=[];
    let date='';
    let cart=[];
    myOrders.forEach(element => {
      attendant=element.Attendantid;
      date=element.created;
      products.push({'saleid':element.saleid,'product': element.name,'quantity': element.quantity,'price': element.Total*element.quantity});
    });
    products.forEach(element=>{
      total+=element.price;
    })
    cart.push({'attendantId':attendant,'Date':date,'SaleTotal': total,'Product_Details':products});
    if(userpriv === 1 || userid === cart[0].attendantId ){
      return res.status(200).send({
        success: 'true',
        message: 'order retrieved successfuly',
        cart,
      });
    }else{
      return res.status(403).send({
        success: 'false',
        message: 'You are not allowed to view this order',
      });
    }
   
  }

  static async getparicularorder(req, res) {
    const { userId } = req;
    const { userpriv } = req;
    let userid = userId;
    const id = parseInt(req.params.id, 10);
    const { productsId , Total, attendantId, quantity} = req.body;
    const add = new queries({productsId , Total, attendantId, quantity});
    const myOrders = await add.getparticularOrder(id);
    if(userpriv === 1 || userid === Order[0].Attendantid ){
      return res.status(200).send({
        success: 'true',
        message: 'order retrieved successfuly',
        myOrders,
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
    let sales=[];
    let result=[];
    let total=0;
   Orders.forEach(element=>{
    total+=element.Total;
    sales.push({'saleid':element.saleid,'attendant':element.Attendantid,'product':element.name,'price':element.Total,'quantity':element.quantity,'date':element.created});
   })
   result.push({'total':total,'sales':sales})

    return res.status(200).send({
      success: 'true',
      message: 'orders retrieved successfuly',
      result,
    });
  }


}

export default Products;
