import express from 'express';

import products from '../controllers/store';

import attendant from '../controllers/users';

import authentication from '../middleware/authentication';

import auth from '../middleware/userauth';

import authorize from '../helpers/authorize';

const router = express.Router();


router.post('/auth/signup',authorize.adminauthenticate,authentication.signup);
router.post('/auth/signin',authentication.signin);
router.post('/auth/signupAdmin',authentication.signupadmin);

router.get('/',authorize.adminauthenticate,attendant.getAllAttendants);
router.get('/:id',authorize.adminauthenticate,attendant.getAttendant);

router.delete('/:id',authorize.adminauthenticate,attendant.deleteAttendant);

router.put('/:id',auth.authinfo,authorize.authenticate, attendant.updateattendantauth);
router.put('/info/:id',authorize.authenticate,auth.info, attendant.updateattendantinfo);

module.exports = router;
