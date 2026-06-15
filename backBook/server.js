const mongoose = require('mongoose');
const {app , port} = require('./app.js');

// falta conectar a la base de datos
app.listen(port,()=>{
    console.log("server active in the port :",port);
});