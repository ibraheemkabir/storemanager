import express from 'express';

import products from '../controllers/store';

import attendant from '../controllers/users';

import authentication from '../middleware/authentication';

import auth from '../middleware/productauth';

import authorize from '../helpers/authorize';

const router = express.Router();

router.post('/products',auth.addProduct,authorize.adminauthenticate,products.addProduct);
router.post('/category',authorize.adminauthenticate,auth.newCategory, products.addCategory);
router.post('/sales', auth.newSales,authorize.authenticate,products.newOrder);
router.post('/auth/signup',authorize.adminauthenticate,authentication.signup);
router.post('/auth/signin',authentication.signin);
router.post('/auth/signupAdmin',authentication.signupadmin);

router.get('/products', auth.allProducts,authorize.authenticate, products.getAllProducts);
router.get('/products/:id', auth.getProduct, products.getProduct);
router.get('/sales',authorize.adminauthenticate, products.getAllOrders);
router.get('/sales/:id',authorize.authenticate,products.getAttendantorder);
router.get('/category',authorize.authenticate,products.getAllCategories);
router.get('/users',authorize.adminauthenticate,attendant.getAllAttendants);
router.get('/users/:id',authorize.adminauthenticate,attendant.getAttendant);

router.delete('/category/:id',authorize.adminauthenticate, products.deleteCategory);
router.delete('/products/:id',auth.deleteProduct,authorize.adminauthenticate, products.deleteProduct);
router.delete('/users/info/:id',authorize.adminauthenticate,attendant.deleteAttendant);

router.put('/products/:id',authorize.adminauthenticate, auth.addProduct, products.updateProduct);
router.put('/users/:id',authorize.authenticate, attendant.updateattendantauth);
router.put('/users/info/:id',authorize.authenticate,auth.info, attendant.updateattendantinfo);

module.exports = router;
