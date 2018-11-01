import express from 'express';

import { product } from '../helpers/productarray';
import queries from '../models/userqueries';

export default class Attendants {

  static async addAttendant(req, res) {
    const { firstname, lastname, username, password } = req.body;
    const add = new queries({ firstname, lastname, username, password});
;    const newattendant = await add.addAttendant();
    return res.status(201).json({
      success: 'true',
      message: 'new Attendant added successfuly',
      newattendant,
    });
  }

  static async addAdmin(req, res) {
    const { firstname, lastname, username, password } = req.body;
    const add = new queries({ firstname, lastname, username, password});
;    const newattendant = await add.addAttendant();
    return res.status(201).json({
      success: 'true',
      message: 'new Admin added successfuly',
      newattendant,
    });
  }

  static async getAllAttendants(req, res) {
    const { firstname, lastname, username } = req.body;
    const add = new queries({ firstname, lastname, username});
;    const newattendant = await add.getAllAttendants();
    return res.status(200).json({
      success: 'true',
      message: 'All Attendants retrieved successfuly',
      newattendant,
    });
  }

  
  static async updateattendantauth(req, res) {
    const id = parseInt(req.params.id, 10);
    const { username , password} = req.body;
    const add = new queries({username, password});
    const result = await add.updateattendantauth(id);
    if (result.rowCount===0) {
      return res.status(404).json({
        success: 'false',
        message: 'product not found',
      });
    }
    return res.status(200).json({
      success: 'true',
      message: 'authentication info updated successfully',
      result,
    });
  }

  
  static async updateattendantinfo(req, res) {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, email, age, phonenumber, address, contact, username, password } = req.body;
    const add = new queries({ firstname, lastname, email, age, phonenumber, address, contact, username, password });
    const result = await add.updateattendantinfo(id);
    if (result.rowCount===0) {
      return res.status(404).json({
        success: 'false',
        message: 'product not found',
      });
    }
    return res.status(200).json({
      success: 'true',
      message: 'information updated successfully',
      result,
    });
  }

  static async deleteAttendant(req, res) {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, username } = req.body;
    const add = new queries({ firstname, lastname, username});
;    const delattedant= await add.deleteAttendant(id);
    if (delattedant) {
      return res.status(200).json({
        success: 'true',
        message: 'Attendant deleted successfuly',
        delattedant,
      });
    }
    return res.status(404).json({
      success: 'false',
      message: 'product not found',
      delattedant,
    });
  }

  static async getAttendant(req, res) {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, username } = req.body;
    const add = new queries({ firstname, lastname, username});
    const newattendant = await add.getAttendant(id);
    if (newattendant.rowCount!=0) {
      return res.status(200).json({
        success: 'true',
        message: 'Attendant retrieved successfully',
        newattendant,
      });
    }else
    return res.status(404).json({
      success: 'false',
      message: `product with the id ${id} does not exist`,
    });
  }

  static async signin(req, res) {
    const { username, password } = req.body;
    const add = new queries({ username });
    const sign = await add.signin();
    if (sign.rowCount === 0) {
      return res.status(200).json({
        success: 'false',
        message: 'user does not exist',
      });
    }else if( sign.rows[0].password === password )
    return res.status(200).json({
      success: 'true',
      user: sign.rows[0],
      message: `signin successful`,
    });
  
    return res.status(200).json({
      success: 'false',
      user: sign.rows[0],
      message: `password is wrong`,
    });
    
  }
}
