import app from '../../app';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { Prods } from '../models/productsModel';

const chaiHttp = require('chai-http');

const chai = require('chai');

const should = chai.should();

chai.use(chaiHttp);

const testproduct = {
  name:'balertest',
  price:'2000',
  category:'shirts',
  image:'/age/size',
  quantity:'12',
};

const userCredentials = {
  username: 'testguy20',
  password: 'test',

};

const badCredentials = {
    username: 'badtest',
    password: 'test',
  };

  const badpassword= {
    username: 'testguy20',
    password: 'test2655',
  };

const testorder = {
  productsId:'23',
  Total:'2000',
  attendantId:'12',
  quantity: '2',
};


const testcategory = {
  category:'jins',
};

describe('/POST products', () => {

  let token;
  let id;
  before(async () => {
    const res = await chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userCredentials)
        token = res.body.token;
  });

  

  before('it should add new products', (done) => {
    chai.request(app)
      .post('/api/v1/products/')
      .set('token', `${token}`)
      .send(testproduct)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');

        
        done();
      });
  });

  it('should signin new user ', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('token', `${token}`)
      .send(userCredentials)
        .end((err,res)=>{
            console.log(err);
        res.should.have.status(200);
        done();
        })
    });
    it('should signin bad credentials ', (done) => {
            chai.request(app)
              .post('/api/v1/auth/signin')
              .set('token', `${token}`)
              .send(badCredentials)
                .end((err,res)=>{
                    console.log(err);
                res.should.have.status(200);
                done();
            })
        });
    
  
    it('should check for badpassword ', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('token', `${token}`)
      .send(badpassword)
        .end((err,res)=>{
            console.log(err);
        res.should.have.status(200);
        done();
        })
        });

});