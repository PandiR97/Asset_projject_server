
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoutes = require('./login');
const insertAsset = require('./formData');
const fullName = require('./fullName');
const adminview = require('./adminview');
const employeeview = require('./employeeview');
const deleteuser = require('./deleteUser');
const updateUser = require('./dataUpdate');
const statflag = require('./status');

const connection = require('./db');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(loginRoutes);
app.use(insertAsset);
app.use(fullName);
app.use(adminview);
app.use(employeeview);
app.use(deleteuser);
app.use(updateUser);
app.use(statflag)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//connection.end();