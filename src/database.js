const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'contrasena',
  database: 'bd_farmacia',
  port: '3306'
});

db.connect((err) => {
  if(err) throw err;
  console.log('MySQL connected...');
});

module.exports = db;
