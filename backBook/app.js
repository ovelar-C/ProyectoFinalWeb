const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routerBook = require('./src/routes/routesBook.js');

app.use(cors());
app.use(express.json());

app.use('/api/bookstore', routerBook);

module.exports = {app , port};



