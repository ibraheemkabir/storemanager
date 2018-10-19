import express from 'express';

import products from '../controllers/store';

import auth from '../middleware/productauth';

import queries from '../models/queries';

const router = express.Router();

router.post('/products', auth.addproduct,queries.addProduct , products.addProduct);
router.delete('/products/:id', auth.deleteproduct ,queries.deleteproduct, products.deleteproduct);
router.get('/products', auth.allproducts,queries.allProducts, products.allProducts);
router.put('/products/:id', auth.updateproduct,queries.updateproduct, products.updateproduct);
router.get('/products/:id', auth.getproduct , queries.getproduct, products.getproduct);
router.get('/order',auth.allorders, products.allorders);
router.post('/order',auth.newOrder, products.newOrder);
router.get('/category', products.getcategories);
router.post('/category', products.addcategory);

export default router;
module.exports = router;
