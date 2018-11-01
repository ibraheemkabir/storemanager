import jwt from 'jsonwebtoken';
import  queries  from '../models/userqueries';

const secret = 'storemanager';

class authorize {

  static async adminauthenticate (req, res, next) {
    const token = req.headers.token;
    const error = {};
    if (!token) {
      error.token = 'No token provided';
      return res.status(401).json({
        message: error.token,
        status: 'error',
        error,
      });
    }
  
    try {
      const verifiedToken = jwt.verify(token, secret);        
      const priviledge = parseInt(verifiedToken.id.priv,10);   
      if(priviledge !== 1){
        return res.status(401).json({
          success: 'false',
          message: 'you are not allowed to view this page',
        });
      }else return next();
    }
      catch (err) {
      error.message = 'Unauthorized, invalid token or session have expired';
      return res.status(401).json({
        status: 'error',
        message: req.userId,
        error,
      });
    }
  };

  static async authenticate(req, res, next) {
    const token = req.headers.token;
    const error = {};
    if (!token) {
      error.token = 'No token provided/you must be logged in to access this API';
      return res.status(401).json({
        message: 'failed',
        status: 'error',
        error,
      });
    }
  
    try {
      const verifiedToken = jwt.verify(token, secret);        
      const priviledge = parseInt(verifiedToken.id.priv,10);   
      req.userId=verifiedToken.id.id;
      req.userpriv=priviledge;
      return next();
    }
      catch (err) {
      error.message = 'Unauthorized, invalid token or session have expired';
      return res.status(401).json({
        status: 'error',
        message: req.userId,
        error,
      });
    }
  };
}

export default authorize;
