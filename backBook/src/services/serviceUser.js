const User = require('../model/modelUser.js');
const userBcrypt = require("../bcrypt/bcrypt.js");

async function getContent() {
    try {
        return await User.find();
    } catch (error) {
        console.log(error);
        return [];
    }
}

function getAll() {
    return getContent();
}

async function checkUser(dataUser) {
    //aca debemos revisar la db para ver si ya el
    // user esta registrado o no
    const resultado = await User.findOne({
        email: dataUser.email,
    });
    //si no encunetra coicidencia es null
    return resultado;
}
async function signIn(dataUser) {
    //user puede ser null o no
    const user = await checkUser(dataUser);
    if (!user) {
        return user
    }
    //resultado puede ser true o false
    const resultado = await userBcrypt.compararPass(dataUser.password, user.password);
    //dataUser tiene el email y el passPlano
    //debemos buscar la passHash y mandar a comparar
    console.log(resultado);
    if (!resultado) {
        return resultado
    }
    const userData = {
        username: user.username,
        email: user.email,
        password: user.passord,
        rol: user.rol
    }
    return userData
}
//debo quedarme con la contraseña en texto plano?????
async function registerUser(dataUser) {
    try {
        const respuesta = await checkUser(dataUser);
        if (respuesta) {
            return false;
        }
        if (dataUser.email == "admin@gmail.com" && dataUser.password == "1234") {
            dataUser.rol = "admin";
        }
        dataUser.password = await userBcrypt.hashPassword(dataUser.password);
        const user = new User(dataUser);
        await user.save();
        return user;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = {
    getAll,
    signIn,
    registerUser
}
