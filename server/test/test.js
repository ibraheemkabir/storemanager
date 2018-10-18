import app from '../../app';
import { product } from '../helpers/productarray';
import { Order } from '../helpers/productarray';
import { Prods } from '../models/productsModel';

process.env.NODE_ENV = 'test';

const chaiHttp = require('chai-http');

const chai = require('chai');

const expect = chai.expect();
const should = chai.should();

const request = require('supertest');

chai.use(chaiHttp);

const testproduct = {
  name:'balertest',
  price:'2000',
  category:'shirts',
  size:'2016',
};

describe('/POST entry', () => {

  it('it should add new products', (done) => {
    request(app)
      .post('/api/v1/products/')
      .send(testproduct)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should update product information', (done) => {
    chai.request(app)
      .put(`/api/v1/products/1`)
      .send(testproduct)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should get a particular product', (done) => {
    chai.request(app)
      .get(`/api/v1/products/1`)
      .end((err, res) => {
        res.should.have.status(200);
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

  it('it should delete a product', (done) => {
    chai.request(app)
      .delete('/api/v1/products/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
