import jwt from 'jsonwebtoken';
import  queries  from '../models/userqueries';

const secret = 'storemanager';
const authenticate = (req, res, next) => {
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
    if(priviledge === 0){
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

export default authenticate;
