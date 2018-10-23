import express from 'express';

import products from '../controllers/store';

import auth from '../middleware/productauth';

import queries from '../models/queries';

const router = express.Router();

router.post('/products', auth.addproduct, products.addProduct);
router.delete('/products/:id', auth.deleteproduct, products.deleteproduct);
router.get('/products', auth.allproducts, products.getProducts);
router.put('/products/:id', auth.updateproduct, products.updateproduct);
router.get('/products/:id', auth.getproduct , products.getproduct);
router.get('/order',auth.allorders, products.getorders);
router.post('/order',auth.newOrder, products.newOrder);
router.get('/category', products.getcategories);
router.post('/category', products.addcategory);

export default router;
module.exports = router;
