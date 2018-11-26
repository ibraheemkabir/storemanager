import express from 'express';
import client from '../helpers/connection';
import joi from 'joi';

const schema = joi.object().keys({
  price: joi.number().required(),
  category: joi.string().required(),
  name: joi.string().required(),
  quantity: joi.number().required(),
  image: joi.string().required(),
})

const idschema = joi.object().keys({
  index: joi.number().positive().required(),
  })

const categoryschema = joi.object().keys({
    category: joi.string().required(),
})

const infoschema = joi.object().keys({
  firstname: joi.string().required(),
  email: joi.string().required(),
  lastname: joi.string().required(),
  age: joi.number().required(),
  phonenumber: joi.number().required(),
  address: joi.string().required(),
  contact: joi.number().required(),
})

const authschema = joi.object().keys({
  username: joi.string().required(),
    password: joi.string().alphanum().required(),
})



class userauth{
     
  
    static async info(req, res, next) {
    const { firstname, lastname, email, age, phonenumber, address, contact} = req.body;
    const infovalidate= joi.validate({firstname, lastname, email, age, phonenumber, address, contact},infoschema);
    const { userId } = req;
    const id = parseInt(req.params.id, 10);
    if(userId !== id){
      return res.status(201).send({
        success: 'false',
        message: 'You cannot update this info',
    });
    }else if(infovalidate){
        const error = infovalidate.error.details[0].message;
    return res.status(400).send(
    {
        success: 'false',
        error: error,
    });}
    return next();
    }

      
    static async authinfo(req, res, next) {
        const { username, password} = req.body;
        const infovalidate= joi.validate({username, password},authschema);
        if(infovalidate.error){
            const error = infovalidate.error.details[0].message;

        return res.status(400).send(
        {
          error,
        });
        }
    return next();
    }
  

}

export default userauth;
