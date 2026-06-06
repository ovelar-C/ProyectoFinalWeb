const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const  routerBook = require('./src/routes/routesBook.js');

app.use('/api/bookstore', routerBook);
app.use(express.json());
app.use(cors());

app.listen(port,() =>{
    console.log("Server active in port :",port)
})