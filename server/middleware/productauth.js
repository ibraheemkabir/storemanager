import express from 'express';

import products from '../models/productsModel';

class Productauth{
     addproduct(req, res, next) {
        if (!req.body.name) {
          res.status(400).send({
            success: 'false',
            message: 'product name is required',
          });
        } else if (!req.body.size) {
          res.status(400).send({
            success: 'false',
            message: 'size is required',
          });
        } else if (!req.body.price) {
            res.status(400).send({
              success: 'false',
              message: 'price is required',
        });
        } else if (!req.body.category) {
            res.status(400).send({
              success: 'false',
              message: 'category is required',
        });
        }
        return next();
    }

     deleteproduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        if (!index) {
          res.status(400).send({
            success: 'false',
            message: 'product id is required',
          });
        }
        return next();
    }

     allproducts(req, res, next) {
        return next();
    }

     getproduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        if (!index) {
          res.status(400).send({
            success: 'false',
            message: 'product id is required',
          });
        }
        return next();
    }

     updateproduct(req, res, next) {
      if (!req.body.name) {
        res.status(400).send({
          success: 'false',
          message: 'product name is required',
        });
      } else if (!req.body.size) {
        res.status(400).send({
          success: 'false',
          message: 'size is required',
        });
      } else if (!req.body.price) {
          res.status(400).send({
            success: 'false',
            message: 'price is required',
      });
      } else if (!req.body.category) {
          res.status(400).send({
            success: 'false',
            message: 'category is required',
      });
      }
        return next();
    }

     newOrder(req, res, next) {
        if (!req.body.productsId) {
          res.status(400).send({
            success: 'false',
            message: 'productsId is required',
          });
        } else if (!req.body.total) {
          res.status(400).send({
            success: 'false',
            message: 'total is required',
          });
        }
        return next();
    }

     allorders(req, res, next) {
        return next();
    }

}

const auth = new Productauth();
export default auth;
