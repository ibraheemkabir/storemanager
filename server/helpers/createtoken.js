import jwt from 'jsonwebtoken';

const secret = 'storemanager';

const createToken = id => jwt.sign(
  { id },
  secret,
  { expiresIn: '1 day' },
);

export default createToken;
