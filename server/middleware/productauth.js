import express from 'express';
import products from '../models/productsModel';

class Productauth{
     static addProduct(req, res, next) {
        if (!req.body.name) {
          return res.status(400).send({
            success: 'false',
            message: 'product name is required',
          });
        } else if (!req.body.size) {
          return res.status(400).send({
            success: 'false',
            message: 'size is required',
          });
        } else if (!req.body.price) {
            return res.status(400).send({
              success: 'false',
              message: 'price is required',
        });
        } else if (!req.body.category) {
            return res.status(400).send({
              success: 'false',
              message: 'category is required',
        });
        }
        return next();
    }

     static deleteProduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        if (!index) {
          return res.status(400).send({
            success: 'false',
            message: 'product id is required',
          });
        }
        return next();
    }

     static allProducts(req, res, next) {
        return next();
    }

      static getProduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        if (!index) {
          return res.status(400).send({
            success: 'false',
            message: 'product id is required',
          });
        }
        
        return next();
    }

   static newOrder(req, res, next) {
        if (!req.body.productsId) {
          return res.status(400).send({
            success: 'false',
            message: 'productsId is required',
          });
        } else if (!req.body.Total) {
          return res.status(400).send({
            success: 'false',
            message: 'total is required',
          });
        }
        return next();
    }

    static newCategory(req, res, next) {
      if (!req.body.category) {
        return res.status(400).send({
          success: 'false',
          message: 'category is required',
        });
      }
      return next();
    }

     static allOrders(req, res, next) {
        return next();
    }

}

export default Productauth;
