const express = require('express');
const router = express.Router();
const connection = require('./db');

router.post('/fullname', (req, res) => {
  const { username } = req.body;
  const query = 'SELECT user_name, user_role, username FROM users WHERE username = ? ';
  
  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ message: 'An error occurred' });
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ message: 'FullName Fetched', fullname: user.user_name, role: user.user_role, userid: user.username  });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });

  
});

module.exports = router;