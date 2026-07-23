const mongoose = require('mongoose');
const app = require('./app.js');
const port = 3000;
const uri = "mongodb://127.0.0.1:27017/prueba";
// falta conectar a la base de datos

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("OK connection base de datos");
        app.listen(port, () => {
            console.log("server active in the port :", port);
        });
    } catch (error) {
        console.log("ERROR connection base de datos", error);
    }
}

connect();