const bcrypt = require("bcrypt");
const saltRounds = 10;

async function hashPassword(password) {
    try {
        return await bcrypt.hash(password, saltRounds);

    } catch (error) {
        console.log(error);
    }
}
async function compararPass(passPlano, passHash){
    return await bcrypt.compare(passPlano,passHash);
}
module.exports = {
    hashPassword,
    compararPass
}