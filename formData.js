const express = require('express');
const router = express.Router();
const connection = require('./db');

router.post('/insert-asset', (req, res) => {
    const {
      userid,
      username,
      first_name,
      last_name,
      gender,
      dob,
      date_of_joining,
      position,
      address1,
      address2,
      city,
      state,
      zipcode,
      laptop_model,
      welocome_kit,
      headset_pref,
      temp_is_status,
      perm_id_status,
      access_card,
      yubikey_status,
      workstationallocated_stat,
      req_space_loc_stat,
      park_pass_stat,
      comments
    } = req.body;
  
    const query = `
      INSERT INTO assetdata (
        userid, 
        username, 
        first_name, 
        last_name, 
        gender, 
        dob, 
        date_of_joining, 
        position, 
        address1, 
        address2, 
        city, 
        state, 
        zipcode, 
        laptop_model, 
        welocome_kit, 
        headset_pref, 
        temp_is_status, 
        perm_id_status, 
        access_card, 
        yubikey_status, 
        workstationallocated_stat, 
        req_space_loc_stat, 
        park_pass_stat, 
        comments
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    
  
    connection.query(
      query,
      [
        userid,
        username,
        first_name,
        last_name,
        gender,
        dob,
        date_of_joining,
        position,
        address1,
        address2,
        city,
        state,
        zipcode,
        laptop_model,
        welocome_kit,
        headset_pref,
        temp_is_status,
        perm_id_status,
        access_card,
        yubikey_status,
        workstationallocated_stat,
        req_space_loc_stat,
        park_pass_stat,
        comments
      ],
      (err, results) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ message: 'An error occurred' });
          console.log("500 response")
          return;
        }
        res.status(200).json({ message: 'Data inserted successfully' });
        console.log("200 response")
      }
    );
  });
  
  module.exports = router;