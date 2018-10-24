import express from 'express';

import products from '../controllers/store';

import auth from '../middleware/productauth';

import queries from '../models/queries';

const router = express.Router();

router.post('/products', auth.addProduct, products.addProduct);
router.delete('/products/:id', auth.deleteProduct, products.deleteProduct);
router.get('/products', auth.allProducts, products.getAllProducts);
router.put('/products/:id', auth.addProduct, products.updateProduct);
router.get('/products/:id', auth.getProduct, products.getProduct);
router.get('/order',auth.allOrders, products.getAllOrders);
router.post('/order',auth.newOrder, products.newOrder);
router.get('/category', products.getAllCategories);
router.post('/category',auth.newCategory, products.addCategory);

module.exports = router;
