import app from '../../app';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { Prods } from '../models/productsModel';

const chaiHttp = require('chai-http');

const chai = require('chai');

const should = chai.should();

chai.use(chaiHttp);

const testproduct = {
  name:'testproduct27',
  price:2000,
  category:'shirts',
  quantity:12,
};

const userCredentials = {
  username: 'admin',
  password: 'admin',

};

const testorder = {
  productsId:23,
  Total:2000,
  quantity: 2,
};


const testcategory = {
  category:'suits3',
};

describe('Test all product operations using admin credentials', () => {

  let token;
  let id;
  let ids;
  before(async () => {
    const res = await chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(userCredentials)
        token = res.body.token;
  });

  it('it should add new products', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('token', `${token}`)
      .field(testproduct)
      .attach('image','..\\baby.jpg')
      .end((err, res) => {
        id=res.body.newProduct.id;
        done();
      });
  });
  
  it('it should require inputs when adding new products', (done) => {
    chai.request(app)
      .post('/api/v1/products/')
      .send()
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();

      });
  });

    it('it should add new order', (done) => {
      chai.request(app)
        .post('/api/v1/sales/')
        .send(testorder)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
          return err;
        });
    });

      it('it should add new categories', (done) => {
        chai.request(app)
          .post('/api/v1/category/')
          .set('token', `${token}`)
          .send(testcategory)
          .end((err, res) => {
            ids=res.body.categories.id;
            done();
          });
      });

      it('it should require inputs add new categories', (done) => {
        chai.request(app)
          .post('/api/v1/category/')
          .set('token', `${token}`)
          .send()
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
          });
      });

  it('it should update product information', (done) => {
    chai.request(app)
      .put(`/api/v1/products/${id}`)
      .set('token', `${token}`)
      .attach('image','uploads\\baby.jpg')
      .field(testproduct)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should require info to update product information', (done) => {
    chai.request(app)
      .put('/api/v1/products/1')
      .send()
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });


  it('it should get a particular product', (done) => {
    chai.request(app)
      .get(`/api/v1/products/${id}`)
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should not get an invalid particular product', (done) => {
    chai.request(app)
      .get(`/api/v1/products/string`)
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });



  it('it should GET all the products', (done) => {
    chai.request(app)
      .get('/api/v1/products')
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

      it('it should GET all the products', (done) => {
        chai.request(app)
          .get('/api/v1/product/')
          .set('token', `${token}`)
          .send()
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
          });
      });
    
    
   
    
      it('it should not delete invalid products', (done) => {
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
  
      it('it should delete category', (done) => {
        chai.request(app)
          .delete(`/api/v1/category/${ids}`)
          .set('token', `${token}`)
          .end((err, res) => {
            done();
          });
      });

    it('it should delete products', (done) => {
      chai.request(app)
        .delete(`/api/v1/products/${id}`)
        .set('token', `${token}`)
        .end((err, res) => {
          done();
        });
    });
});