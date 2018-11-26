import express from 'express';

import products from '../controllers/store';

import attendant from '../controllers/users';

import authentication from '../middleware/authentication';

import auth from '../middleware/productauth';

import authorize from '../helpers/authorize';

const router = express.Router();

import multer from 'multer';

import { Order } from '../helpers/productarray';
import  queries  from '../models/queries';

const upload = multer({dest:'./uploads/'})


router.post("/products", upload.single('image'),authorize.adminauthenticate,auth.addProduct, products.addProduct);
router.post('/category',authorize.adminauthenticate,auth.newCategory, products.addCategory);
router.post('/sales', auth.newSales,authorize.authenticate,products.newOrder);
router.post('/sales/cart/:id', auth.newSales,authorize.authenticate,products.updateOrder);

router.get('/products', auth.allProducts,authorize.authenticate, products.getAllProducts);
router.get('/products/:id', auth.getProduct, products.getProduct);
router.get('/sales',authorize.adminauthenticate, products.getAllOrders);
router.get('/sales/:id',authorize.authenticate,products.getAttendantorder);
router.get('/sale/:id',authorize.authenticate,products.getparicularorder);
router.get('/category',authorize.authenticate,products.getAllCategories);

router.delete('/category/:id',authorize.adminauthenticate, products.deleteCategory);
router.delete('/products/:id',auth.deleteProduct,authorize.adminauthenticate, products.deleteProduct);

router.put('/products/:id',authorize.adminauthenticate, auth.addProduct, products.updateProduct);

module.exports = router;
