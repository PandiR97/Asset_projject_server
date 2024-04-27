const express = require('express');
const router = express.Router();
const connection = require('./db');

router.post('/update-asset/:id', (req, res) => {
  const assetId = req.params.id;
  const {
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
    headset_pref,
    temp_is_status,
    perm_id_status,
    access_card,
    yubikey_status,
    workstationallocated_stat,
    req_space_loc_stat,
    park_pass_stat,
    comments,
    phonenumber
  } = req.body;

  const query = `
    UPDATE assetdata
    SET
      first_name = ?,
      last_name = ?,
      gender = ?,
      dob = ?,
      date_of_joining = ?,
      position = ?,
      address1 = ?,
      address2 = ?,
      city = ?,
      state = ?,
      zipcode = ?,
      laptop_model = ?,
      headset_pref = ?,
      temp_is_status = ?,
      perm_id_status = ?,
      access_card = ?,
      yubikey_status = ?,
      workstationallocated_stat = ?,
      req_space_loc_stat = ?,
      park_pass_stat = ?,
      comments = ?,
      phonenumber = ?
    WHERE id = ?
  `;

  connection.query(
    query,
    [
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
      headset_pref,
      temp_is_status,
      perm_id_status,
      access_card,
      yubikey_status,
      workstationallocated_stat,
      req_space_loc_stat,
      park_pass_stat,
      comments,
      phonenumber,
      assetId
    ],
    (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ message: 'An error occurred' });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Data not found' });
        return;
      }
      res.status(200).json({ message: 'Data updated successfully' });
    }
  );
});

module.exports = router;
