import express from 'express';

import products from '../models/productsModel';

export default class Productauth{
    static async addproduct(req, res, next) {
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

    static async deleteproduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        if (!index) {
          res.status(400).send({
            success: 'false',
            message: 'product id is required',
          });
        }
        return next();
    }

    static async allproducts(req, res, next) {
        return next();
    }

    static async getproduct(req, res, next) {
        const index = parseInt(req.params.id, 10);
        if (!index) {
          res.status(400).send({
            success: 'false',
            message: 'product id is required',
          });
        }
        return next();
    }

    static async updateproduct(req, res, next) {
        const { name} = req.body;
        const { size } = req.body;
        if (!name) {
          res.status(400).send({
            success: 'false',
            message: 'product is required',
          });
        } else if (!size) {
          res.status(400).send({
            message: 'title is required',
          });
        }
        return next();
    }

    static async newOrder(req, res, next) {
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

    static async allorders(req, res, next) {
        return next();
    }

}
