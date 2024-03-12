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
  
// DELETE
function remove(tableName, id, callback) {
    connection.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
  module.exports = {
    create,
    read,
    update,
    remove
  };