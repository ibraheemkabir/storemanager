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
           
            bcrypt.compare(password, sign.rows[0].password)
              .then((validPassword) => {
                const user = {
                  id: sign.rows[0].id,
                  priv: sign.rows[0].authorisation
                }
               
                const token = createtoken(user);
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

    async signup(req, res) {
      const { username, password } = req.body;
      const add = new queries({ username });
      const sign = await add.signin();
      if (!username || !password) {
          return res.status(400).send({
            success: 'false',
            message: 'username and password is required',
          });
        }
      else 
      if(sign.rowCount !== 0){
        return res.status(400).send({
          success: 'false',
          message: 'user exists',
        });
      }
      bcrypt.hash(password, saltRounds)
      .then(async (hash) => {
      const add = new queries({username, password: hash});
      const sign = await add.addAttendant()
      let id = await sign;
      const token = createtoken(id.attendant_info.id);
      return res.status(200)
      .header('Authorization', `Bearer ${token}`)
      .send({
      status: 'success',
      message: 'User successfully created and succesfully signed in',
      token,
      }); 
      }) 
}

}

const authentications = new authentication();
export default authentications;