
const {Schema,model} = require('mongoose');


const listGenre = [
    'fantasia',
    'ciencia-ficcion',
    'misterio',
    'romance',
    'horror',
    'historico',
    'juvenil',
    'filosofia'
];
const listLanguage = [
    'español',
    'ingles',
    'chino',
    'frances'
]

//revisar genre

const bookSchema = new Schema({
    title: {
        type: String,
        minlength : 1,
        maxlength : 64,
        required : true
    },
    author : {
        type: String,
        minlength : 1,
        maxlength : 64,
        required : true
    },
    description: {
        type: String,
        minlength : 1,
        maxlength : 250,
        required : true
    },
    editorial: {
        type: String,
        minlength : 1,
        maxlength : 32,
        required : true
    },
    type: {
        type : String,
        enum : ['libro', 'manga'],
        required : true
    },
    genre : [{
        type: String,
        enum : listGenre,
        required : true
    }],
    language : {
        type: String,
        enum : listLanguage,
        required : true
    },
    publishedYear : {
        type : Number,
        min : 1000,
        max : 3000,
        required : true
    },
    price : {
        type : Number,
        min : 1,
        required: true
    },
    stock : {
        type : Number,
        min : 0,
        default : 0
    },
    bookImage : {
        type : String,
        default : null,
        required : true 
    }
});

//aca se crea una collecion con el modelo
const Book = model('book', bookSchema);

module.exports = Book;
