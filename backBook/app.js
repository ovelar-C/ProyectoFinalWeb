const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");

const routerBook = require('./src/routes/routesBook.js');
const routerUser = require('./src/routes/routesUser.js');


app.use(cors());
app.use(express.json());

app.use('/api/bookstore/books', routerBook);
app.use('/api/bookstore/users', routerUser);
app.use("/portadas", express.static(path.join(__dirname,"portadas")))

module.exports = app;



