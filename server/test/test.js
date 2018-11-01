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
  username: 'testguy36',
  password: 'test',

};

const testorder = {
  productsId:'23',
  Total:'2000',
  attendantId:'12',
  quantity: '2',
};


const testcategory = {
  category:'skirts',
};

describe('/POST products', () => {

  let token;
  let id;
  before(async () => {
    const res = await chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userCredentials)
        token = res.body.token;
        id = res.body.token;
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

  describe('/POST order', () => {

    it('it should add new order', (done) => {
      chai.request(app)
        .post('/api/v1/sales/')
        .send(testorder)
        .end((err, res) => {
          res.should.have.status(401);
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


  

    describe('/POST categories', () => {
      it('it should add new categories', (done) => {
        chai.request(app)
          .post('/api/v1/category/')
          .set('token', `${token}`)
          .send(testcategory)
          .end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            done();
          });
      });
      it('it should add new categories', (done) => {
        chai.request(app)
          .post('/api/v1/category/')
          .send()
          .end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            done();
          });
      });
    });


describe('/PUT products', () => {
  it('it should update product information', (done) => {
    chai.request(app)
      .put(`/api/v1/products/10`)
      .set('token', `${token}`)
      .send(testproduct)
      .end((err, res) => {
        res.should.have.status(401);
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
});

describe('/GET products', () => {

  before('it should add new products', (done) => {
    chai.request(app)
      .post('/api/v1/products/')
      .set('token', `${token}`)
      .send(testproduct)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        id=res.body.id;
        
        done();
      });
  });

  it('it should get a particular product', (done) => {
    chai.request(app)
      .get(`/api/v1/products/${id}`)
      .end((err, res) => {
        res.should.have.status(400);
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
});

describe('/GET products', () => {
  it('it should GET all the products', (done) => {
    chai.request(app)
      .get('/api/v1/products')
      .end((err, res) => {
        res.should.have.status(401);
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
    });
    
    describe('/DELETE products', () => {
      it('it should delete a product', (done) => {
        chai.request(app)
          .delete(`/api/v1/products/20`)
          .set('token', `${token}`)
          .end((err, res) => {
            res.should.have.status(401);
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
    });

    describe('/POST order', () => {

      it('it should get all order', (done) => {
        chai.request(app)
          .get('/api/v1/sales/')
          .end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            done();
            return err;
          });
      });
    });
  


    })
});