const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nourrain-dev',
  password: 'nourrain-dev-password',
  database: 'nourrain_db'
});
