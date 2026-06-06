const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const  routerBook = require('./src/routes/routesBook.js');

//global
app.use(cors());
app.use(express.json());
//local
app.use('/api/bookstore', routerBook);

app.listen(port,() =>{
    console.log("Server active in port :",port)
})