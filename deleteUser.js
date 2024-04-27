const express = require('express');
const router = express.Router();
const connection = require('./db');

router.delete('/deleteuser', (req, res) => {
  const { userid } = req.body;
  const query = 'DELETE FROM assetdata WHERE userid = ? ';
  
  connection.query(query, [userid], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ message: 'An error occurred' });
      return;
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ message: 'User Details Detailed Successfully' });
    } else {
      res.status(401).json({ message: 'User Not Avialable' });
    }
  });

  
});

module.exports = router;