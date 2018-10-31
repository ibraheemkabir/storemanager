import express from 'express';
import client from '../helpers/connection';
import joi from 'joi';

const schema = joi.object().keys({
  price: joi.number().required(),
  category: joi.string().required(),
  name: joi.string().required(),
  quantity: joi.number().required(),
  image: joi.string().required(),
})

const idschema = joi.object().keys({
  index: joi.number().positive().required(),
  })

const categoryschema = joi.object().keys({
    category: joi.string().required(),
})

const salesschema = joi.object().keys({
  productsId: joi.string().required(),
  Total: joi.string().required(),
  quantity: joi.number().required(),
  attendantId: joi.number().required(),
})

class Productauth{
     
    static async addProduct(req, res, next) {
      const { name , category ,price, image, quantity} = req.body;
      const addproductvalidate= joi.validate({ name , category ,price, image, quantity},schema);
      if(addproductvalidate.error){
        return res.status(400).send({
          success: 'false',
          addproductvalidate,  
      });
      }else{
      const getcategory = `SELECT * FROM categories WHERE "category"='${category}'`;
      const getcategories = await client.query(getcategory);
      if(getcategories.rowCount){
        return res.status(400).send({
          success: 'false',
          error: 'product category does not exist',  
          });   
      }else return next();
      }
    }

    static async newCategory(req, res, next) {
      const { category } = req.body;
      const newcategoryvalidate= joi.validate({ category },categoryschema);
      if(newcategoryvalidate.error){
        const error = newcategoryvalidate.error.details[0].message;
        return res.status(400).send({
          success: 'false',
          error,  
      });
      }else{ 
      const getcategory = `SELECT * FROM categories WHERE "category"='${category}'`;
      const getcategories = await client.query(getcategory);
      if(getcategories.rowCount!==0){
        return res.status(400).send({
          success: 'false',
          error: 'category already exists',  
          });   
      }else return next();
      }
    }

    static newSales(req, res, next) {
      const { productsId , Total, attendantId, quantity} = req.body;
      const newsalesvalidate= joi.validate({ productsId , Total, attendantId, quantity} ,salesschema);
      if(newsalesvalidate.error){
        const error = newsalesvalidate.error.details[0].message;
        return res.status(400).send({
          success: 'false',
          error,  
      });
      }else return next();
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

      static getProduct(req, res, next) {
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

   
    

}

export default Productauth;
