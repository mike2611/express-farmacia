const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const port = 3000;

//Connection to de DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'contrasena',
    database: 'bd_farmacia'
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connection established to MYSQL....')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
