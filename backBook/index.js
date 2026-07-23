/*
require('./server.js');
const Book = require('./src/model/modelBook.js');



const book = new Book({
    title : "El mundo de Sofía",
    author : "Jostein Gaarder",
    description : "novela sobre la historia de la filosofía.",
    editorial : "siruela",
    type: "book",
    genre : ["filosofia" ,"romance"],
    language : "español",
    publishedYear : 1994,
    price : 20000
});


async function saveUser(){
    const userGuardado = await book.save();
    console.log(userGuardado);
}
saveUser();
*/
require('./server.js');
const User = require('./src/model/modelUser.js');

const user = new User({
    username : "Napoleon",
    password : 'rey de francia',
    email : 'napoleon@gmail.com'
});

async function saveUser(){
    const userGuardado = await user.save();
    console.log(userGuardado);
}
saveUser();
