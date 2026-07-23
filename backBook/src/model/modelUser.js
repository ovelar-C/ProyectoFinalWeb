const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type : String,
        minlength : 1,
        maxlength : 40,
        required : true,
        trim : true
    },
    password: {
        type : String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique : true,
        trim : true,
        lowercase: true
    },
    rol : {
        type: String,
        enum : ['admin', 'user'],
        required : true,
        default : 'user'
    }
});

const User = model('user', userSchema);
module.exports = User;