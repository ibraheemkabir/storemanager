import express from 'express';

import products from '../controllers/store';

import attendant from '../controllers/users';

import auth from '../middleware/productauth';


import queries from '../models/queries';

const router = express.Router();

router.post('/products', products.addProduct);
router.delete('/products/:id', products.deleteProduct);
router.get('/products', auth.allProducts, products.getAllProducts);
router.put('/products/:id', auth.addProduct, products.updateProduct);
router.get('/products/:id', auth.getProduct, products.getProduct);
router.get('/sales', products.getAllOrders);
router.post('/sales', products.newOrder);
router.get('/sales/:id',products.getAttendantorder);
router.get('/category', products.getAllCategories);
router.delete('/category/:id', products.deleteCategory);
router.post('/category',auth.newCategory, products.addCategory);
router.post('/auth/signup', attendant.addAttendant);
router.get('/users', attendant.getAllAttendants);
router.get('/users/:id', attendant.getAttendant);
router.put('/users/:id', attendant.updateattendantauth);
router.put('/users/info/:id', attendant.updateattendantinfo);
router.delete('/users/info/:id', attendant.deleteAttendant);
router.post('auth/login', attendant.signin);


module.exports = router;
