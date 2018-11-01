import express from 'express';
import client from '../helpers/connection';

export default class userQueries {
  constructor({ firstname, lastname, email, age, phonenumber, address, contact, username, password}) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.phonenumber = phonenumber;
    this.address = address;
    this.contact = contact;
    this.username = username;
    this.password = password;
  }


    async addAttendant() {
    const addAuthInfo = 'INSERT INTO authentication("username", "password", "authorisation") VALUES($1, $2, 0) RETURNING *';
    const authinfo = await client.query(addAuthInfo, [this.username, this.password]);
    const addAttendantInfo = 'INSERT INTO attendants("firstname", "lastname", "email", "age", "phonenumber", "address", "emergency_contact",authid, "created") VALUES($1, $2, $3, $4, $5,$6 , $7,$8, CURRENT_TIMESTAMP) RETURNING *';
    const attendantinfo = await client.query(addAttendantInfo, [this.firstname, this.lastname, this.email, this.age, this.phonenumber, this.address, this.contact,authinfo.rows[0].id]);
    return { attendant_info: attendantinfo.rows[0], account_info: authinfo.rows[0] };
    }
    
    async addAdmin() {
        const addAuthInfo = 'INSERT INTO authentication("username", "password", "authorisation") VALUES($1, $2, 1) RETURNING *';
        const authinfo = await client.query(addAuthInfo, [this.username, this.password]);
        const addAttendantInfo = 'INSERT INTO attendants("firstname", "lastname", "email", "age", "phonenumber", "address", "emergency_contact",authid, "created") VALUES($1, $2, $3, $4, $5,$6 , $7,$8, CURRENT_TIMESTAMP) RETURNING *';
        const attendantinfo = await client.query(addAttendantInfo, [this.firstname, this.lastname, this.email, this.age, this.phonenumber, this.address, this.contact,authinfo.rows[0].id]);
        return { attendant_info: attendantinfo.rows[0], account_info: authinfo.rows[0] };
        }
      
    

    async updateattendantauth(id) {
    const updateattendantauth= await client.query(`UPDATE authentication SET username='${this.username}', password='${this.password}', edited=CURRENT_TIMESTAMP WHERE Id=${id} RETURNING *`);
    return updateattendantauth.rows;
    }

    async updateattendantinfo(id) {
        const updateattendantinfo= await client.query(`UPDATE attendants SET firstname='${this.firstname}', lastname='${this.lastname}',age='${this.age}',email='${this.email}', phonenumber='${this.phonenumber}', address='${this.address}', emergency_contact='${this.contact}', edited=CURRENT_TIMESTAMP WHERE authid=${id} RETURNING *`);
        return updateattendantinfo;
    }

    async getAllAttendants() {
        const getAllAttendantsQuery = 'SELECT * FROM public.attendants';
        const getAllQuery = await client.query(getAllAttendantsQuery);
        return getAllQuery.rows;
    }

    async getAttendant(id) {
        const getAttendantQuery = `SELECT * FROM public.attendants WHERE id=${id}`;
        const getAttendant = await client.query(getAttendantQuery);
        return getAttendant;
    }

    async deleteAttendant(id){
        const deleteAttendantQuery = `DELETE FROM public.attendants WHERE authid=${id} RETURNING *`;
        const deleteauthQuery = `DELETE FROM public.authentication WHERE id=${id} RETURNING *`;
        const deleteQuery = await client.query(deleteAttendantQuery);
        const deletequery = await client.query(deleteauthQuery);
        return deleteQuery.rows;
    }

    async signin() {
        const signinquery =`SELECT * FROM public.authentication WHERE "username"='${this.username}'`;
        const signin = await client.query(signinquery);
        return signin;
    }

    async authorize(id) {
        const authorizequery =`SELECT * FROM public.authentication WHERE "id"='${id}'`;
        const authorize = await client.query(authorizequery);
        return authorize;
    }
}
