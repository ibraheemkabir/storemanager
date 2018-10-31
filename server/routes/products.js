import express from 'express';

import products from '../controllers/store';

import attendant from '../controllers/users';

import authentication from '../middleware/authentication';

import auth from '../middleware/productauth';


import authorize from '../helpers/authorize';

const router = express.Router();

router.post('/products',auth.addProduct,authorize,products.addProduct);
router.post('/category',authorize,auth.newCategory, products.addCategory);
router.post('/sales', auth.newSales,products.newOrder);
router.post('/auth/signup',authentication.signup);
router.post('/auth/signin',authentication.signin);

router.get('/products', auth.allProducts, products.getAllProducts);
router.get('/products/:id', auth.getProduct, products.getProduct);
router.get('/sales',authorize, products.getAllOrders);
router.get('/sales/:id',products.getAttendantorder);
router.get('/category',products.getAllCategories);
router.get('/users',authorize,attendant.getAllAttendants);
router.get('/users/:id',authorize,attendant.getAttendant);

router.delete('/category/:id',authorize, products.deleteCategory);
router.delete('/products/:id',auth.deleteProduct,authorize, products.deleteProduct);
router.delete('/users/info/:id',authorize,attendant.deleteAttendant);

router.put('/products/:id', auth.addProduct,authorize, products.updateProduct);
router.put('/users/:id', attendant.updateattendantauth);
router.put('/users/info/:id', attendant.updateattendantinfo);

module.exports = router;
