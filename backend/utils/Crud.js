const express = require('express');
const mysql = require('mysql');
const app = express();
// importer la connection depuis app.js

connection.connect();


// CREATE
function create(tableName, data, callback) {
    connection.query(`INSERT INTO ${tableName} SET ?`, data, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
// READ
function read(tableName, callback) {
    connection.query(`SELECT * FROM ${tableName}`, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
// UPDATE
function update(tableName, id, data, callback) {
    connection.query(`UPDATE ${tableName} SET ? WHERE id = ?`, [data, id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
  
module.exports = {
    app,
    create,
    read,
    update
  };