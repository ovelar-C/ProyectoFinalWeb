const serviceUser = require('../services/serviceUser.js');

async function getAll(req, res) {
    try {
        const users = await serviceUser.getAll();
        if (users && users.length > 0) {
            return res.status(200).json(users);
        }
        return res.status(400).json({ mensaje: "sin datos" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: "server error" });
    }
}

async function signIn(req,res){
    try {
        const user = await serviceUser.signIn(req.body);
        if(!user){
            return res.status(401).json({mensaje: "error en las credenciales"});
        }else{
            return res.status(200).json(user);
        }
        //comparar password
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje:"error server"});
    }
}
async function registerUser(req,res){
    try {
        const newUser = await serviceUser.registerUser(req.body);
        if(!newUser){
            return res.status(400).json({mensaje: "error al registrar"});
        }
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({mensaje: "error server"});
    }
}

module.exports = {
    getAll,
    registerUser,
    signIn
}