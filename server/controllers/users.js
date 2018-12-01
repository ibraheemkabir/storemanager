import express from 'express';

import { product } from '../helpers/productarray';
import queries from '../models/userqueries';

export default class Attendants {

  static async addAttendant(req, res) {
    const { firstname, lastname, username, password } = req.body;
    const add = new queries({ firstname, lastname, username, password});
    const newattendant = await add.addAttendant();
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
;    const attendants = await add.getAllAttendants();
    return res.status(200).json({
      success: 'true',
      message: 'All Attendants retrieved successfuly',
      attendants,
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
        message: 'info not found',
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
    const { firstname, lastname, email, age, phonenumber, address, contact} = req.body;
    const add = new queries({ firstname, lastname, email, age, phonenumber, address, contact});
    const result = await add.updateattendantinfo(id);
    if (!result) {
      return res.status(404).json({
        success: 'false',
        message: 'User not found',
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
;    const attendant= await add.deleteAttendant(id);
    if (attendant) {
      return res.status(200).json({
        success: 'true',
        message: 'Attendant deleted successfuly',
        attendant,
      });
    }
    return res.status(404).json({
      success: 'false',
      message: 'attendant not found',
    });
  }

  static async getAttendant(req, res) {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, username } = req.body;
    const add = new queries({ firstname, lastname, username});
    const attendant = await add.getAttendant(id);
    if (attendant.rowCount!=0) {
      return res.status(200).json({
        success: 'true',
        message: 'Attendant retrieved successfully',
        attendant,
      });
    }else
    return res.status(404).json({
      success: 'false',
      message: `attendant with the id ${id} does not exist`,
    });
  }

}
