const mysql = require('mysql2');

const dbConnection = {
    host: 'localhost',
    user: 'root',
    password: 'pandi@sql1',
    database: 'asset'
};

const connection = mysql.createConnection(dbConnection);

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  });
  
  module.exports = connection;
  