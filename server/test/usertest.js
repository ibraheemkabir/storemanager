import app from '../../app';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { Prods } from '../models/productsModel';

const chaiHttp = require('chai-http');

const chai = require('chai');

const should = chai.should();

chai.use(chaiHttp);

const adminCredentials = {
  username: 'admin',
  password: 'admin',

};

const attendantCredentials = {
  username: 'testuser',
  password: 'test',

};

const badCredentials = {
    username: 'badtest',
    password: 'test',
  };

  const badpassword= {
    username: 'admin',
    password: 'test2655',
  };

describe('user authentication and login tests', () => {

  let token;
  let id;
  before(async () => {
    const res = await chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(adminCredentials)
        token = res.body.token;
        console.log(token); 
  });

       

    it('should reject users bad credentials ', (done) => {
            chai.request(app)
              .post('/api/v1/users/auth/signin')
              .set('token', `${token}`)
              .send(badCredentials)
                .end((err,res)=>{
                res.should.have.status(404);
                done();
            })
        });
    
  
    it('should check for badpassword ', (done) => {
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .set('token', `${token}`)
      .send(badpassword)
        .end((err,res)=>{
        res.should.have.status(400);
        done();
        })
    });

    
    it('should reject unregistered credentials ', (done) => {
      chai.request(app)
        .post('/api/v1/users/auth/signin')
        .set('token', `${token}`)
        .send(badCredentials)
          .end((err,res)=>{
          res.should.have.status(404);
          done();
      })
  });

  it('should reject user signup without token', (done) => {
    chai.request(app)
      .post('/api/v1/users/auth/signup')
      .send(attendantCredentials)
        .end((err,res)=>{
        res.should.have.status(401);
        done();
    })
});

it('should require input fields for signup', (done) => {
  chai.request(app)
  .post('/api/v1/users/auth/signup')
  .set('token', `${token}`)
  .send()
      .end((err,res)=>{
      res.should.have.status(400);
      done();
  })
});

it('should require input fields for signin', (done) => {
  chai.request(app)
  .post('/api/v1/users/auth/signin')
  .set('token', `${token}`)
  .send()
      .end((err,res)=>{
      res.should.have.status(400);
      done();
  })
});



});