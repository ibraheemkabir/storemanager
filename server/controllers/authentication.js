import bcrypt from 'bcrypt';
import createtoken from '../helpers/createtoken';
import  queries  from '../models/userqueries';

const saltRounds = 12;

class authentication{

    async signin(req, res) {
        const { username, password } = req.body;
        const add = new queries({ username });
        const sign = await add.signin();
        if (!username || !password) {
            return res.status(400).send({
              success: 'false',
              message: 'username and password is required',
              sign,
            });
          }
        if (sign.rowCount === 0) {
          return res.status(200).json({
            success: 'false',
            message: 'user does not exist',
          });
        }else {
            console.log(sign.rows[0]);
            bcrypt.compare(password, sign.rows[0].password)
              .then((validPassword) => {
                const ids = sign.rows[0].id;
                const token = createtoken(ids);
                if (validPassword) {
                  res.status(200)
                    .header('Authorization', `${token}`)
                    .send({
                      success: 'true',
                      message: 'User logged in',
                      token,
                    });
                } else {
                  res.status(200).send({
                    success: 'true',
                    message: 'password not correct',
                  });
                }
            });
        }
        
    }

}


const authentications = new authentication();
export default authentications;