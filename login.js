const express = require('express');
const router = express.Router();
const connection = require('./db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ message: 'An error occurred' });
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ message: 'Login successful', fullname: user.user_name  });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });

  
});

module.exports = router;