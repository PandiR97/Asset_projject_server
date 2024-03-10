
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoutes = require('./login');
const insertAsset = require('./formData');
const updateData = require('./updateData');
const deleteData = require('./deleteData');
const connection = require('./db');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(loginRoutes);
app.use(insertAsset);
app.use(updateData);
app.use(deleteData);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//connection.end();