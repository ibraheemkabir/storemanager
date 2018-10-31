import app from '../../app';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { Prods } from '../models/productsModel';
import { beforeEach } from 'mocha';

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
  username: 'admin',
  password: 'admin',
};

const testorder = {
  productsId:'23',
  Total:'2000',
  attendantId:'12',
  quantity: '2',
};


const testcategory = {
  category:'shoes',
};

describe('/POST products', () => {

  let token;
  let id;
  let ids;
  before(async () => {
    const res = await chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userCredentials)
        token = res.body.token;
  });

  before(async() => {
    chai.request(app)
      .post('/api/v1/products/')
      .set('token', `${token}`)
      .send(testproduct)
      .end((err, res) => {  
        res.should.have.status(201);
        res.body.should.be.a('object');
        ids = res.body.newProduct.id;
        
      });
    }); 
    
  
  it('it should add new products', (done) => {
    chai.request(app)
      .post('/api/v1/products/')
      .send()
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });

  

        it('it should add new order', (done) => {
      chai.request(app)
        .post('/api/v1/sales/')
        .send(testorder)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
          return err;
        });
        });
  
        it('it should add new order', (done) => {
      chai.request(app)
        .post('/api/v1/sales/')
        .send()
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
         
        });
        });


    
  it('it should update product information', (done) => {
    chai.request(app)
      .put(`/api/v1/products/10`)
      .set('token', `${token}`)
      .send(testproduct)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should update product information', (done) => {
    chai.request(app)
      .put('/api/v1/products/1')
      .send()
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
    

        it('it should get a particular product', (done) => {
        chai.request(app)
        .get(`/api/v1/products/${ids}`)
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
        });
  });

  it('it should get a particular product', (done) => {
    chai.request(app)
      .get(`/api/v1/products/string`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });


  it('it should GET all the products', (done) => {
    chai.request(app)
      .get('/api/v1/products')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

      it('it should GET all the products', (done) => {
        chai.request(app)
          .get('/api/v1/product/')
          .send()
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
          });
      });

    
    
      it('it should delete a product', (done) => {
        chai.request(app)
          .get(`/api/v1/products/${ids}`)
          .set('token', `${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
           done();
          })
      });
    
      it('it should delete a product', (done) => {
        chai.request(app)
          .delete(`/api/v1/products/"stiring"`)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('array');
            done();
          });
      });
    

    

      it('it should get all order', (done) => {
        chai.request(app)
          .get('/api/v1/sales/')
          .set('token', `${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
            return err;
          });
      });
    
});
  