import express from 'express';

import products from '../controllers/store';

import auth from '../middleware/productauth';


const router = express.Router();

router.post('/products', auth.addproduct , products.addProduct);
router.delete('/products/:id', auth.deleteproduct , products.deleteproduct);
router.get('/products', auth.allproducts , products.allProducts);
router.put('/products/:id', auth.updateproduct , products.updateproduct);
router.get('/products/:id', auth.getproduct , products.getproduct);
router.get('/order', products.allorders);
router.post('/order', products.newOrder);

export default router;
module.exports = router;
