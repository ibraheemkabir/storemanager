import express from 'express';
import client from '../helpers/connection';
import joi from 'joi';
import queries from '../models/queries'

const schema = joi.object().keys({
  price: joi.number().required(),
  category: joi.string().required(),
  name: joi.string().required(),
  quantity: joi.number().required(),
  image: joi.required(),
})

const idschema = joi.object().keys({
  index: joi.number().positive().required(),
  })

const categoryschema = joi.object().keys({
    category: joi.string().required(),
})

const infoschema = joi.object().keys({
  firstname: joi.string().required(),
  email: joi.string().required(),
  lastname: joi.string().required(),
  age: joi.number().required(),
  phonenumber: joi.number().required(),
  address: joi.string().required(),
  contact: joi.number().required(),
})

const salesschema = joi.object().keys({
  productsId: joi.string().required(),
  Total: joi.string().required(),
  quantity: joi.number().required(),
})




class Productauth{
    

    static async addProduct(req, res, next) {
      const { name , category ,price, quantity} = req.body;
      const image = req.file;
      const addproductvalidate= joi.validate({ name , category ,price, image, quantity},schema);
      if(addproductvalidate.error){
        const error =addproductvalidate.error.details[0].message;
        return res.status(400).send({
          success: 'false',
          error,  
      });
      }else{
        const add = new queries({name , category ,price, image, quantity});
        const newProduct = await add.validation('products','name',name);
        const category = await add.validation('categories','category',category);
        if(newProduct.rowCount != 0){
        return res.status(400).send({
          success: 'false',
          error: 'product already exists',  
        });   
      }else if(!category){
        return res.status(400).send({
          success: 'false',
          error: 'category does not exist',  
          category
        });   
      } else return next();

    }
  }

    static async newCategory(req, res, next) {
      const { category } = req.body;
      const newcategoryvalidate= joi.validate({ category },categoryschema);
      if(newcategoryvalidate.error.details){
        const error = newcategoryvalidate.error.details[0].message;
        return res.status(400).send({
          success: 'false',
          error,  
      });
      }else{ 
        const add = new queries({category});
        const getcategories = await add.validation('categories','category',category);
      if(getcategories.rowCount!==0){
        return res.status(400).send({
          success: 'false',
          error: 'category already exists',  
          });   
      }else return next();
      }
    }

    static async newSales(req, res, next) {
      const { productsId , Total,  quantity} = req.body;
      const newsalesvalidate= joi.validate({ productsId , Total, quantity} ,salesschema);
      const add = new queries({productsId});
      const newProduct = await add.validation('products','id',productsId);
      const category = await add.validation('categories','category',category);
      if(newsalesvalidate.error){
        const error = newsalesvalidate.error.details[0].message;
        return res.status(400).send({
          success: 'false',
          error,  
      });
      }else if(newProduct.rowCount === 0){
      return res.status(400).send({
        success: 'false',
        error: `product with the id ${productsId} does not exist`,  
      }); 
    }  else return next();
  }

     static allOrders(req, res, next) {
        return next();
    }

     static deleteProduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        const idvalidate= joi.validate({index},idschema);
        if(idvalidate.error){
        return res.status(400).send(idvalidate.error.details);
      }
        return next();
    }

     static allProducts(req, res, next) {
        return next();
    }

      static async getProduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        const idvalidate= joi.validate({index},idschema);
        if(idvalidate.error){
          const error = idvalidate.error.details ;
        return res.status(400).send(
          {
          error,
          });
          }
        return next();
    }

    static async info(req, res, next) {
      const { firstname, lastname, email, age, phonenumber, address, contact} = req.body;
      const infovalidate= joi.validate({firstname, lastname, email, age, phonenumber, address, contact},infoschema);
      if(infovalidate){
      return res.status(400).send(
        {
        infovalidate,
        });
        }
      return next();
      }


}

export default Productauth;
