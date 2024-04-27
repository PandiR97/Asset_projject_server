const express = require('express');
const router = express.Router();
const connection = require('./db');

router.get('/adminview', (req, res) => {
  const { username } = req.body;
  const query = 'SELECT * FROM assetdata';
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ message: 'An error occurred' });
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ message: 'Data Fetched', data: results });
    } else {
      res.status(401).json({ message: 'failed to fetch data' });
    }
  });

  
});

module.exports = router;