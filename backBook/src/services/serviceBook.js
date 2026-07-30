const Book = require('../model/modelBook.js');

// traemos todo los datos
async function getContent() {
    try {
        return await Book.find();
    } catch (error) {
        console.log(error);
        return [];
    }
}
function getAll() {
    return getContent();
}
//validar id con mongoose
async function getById(id) {
    try {
        const book = await Book.findById(id);
        return book;
    } catch (error) {
        console.log(error);
        return null;
    }
}
async function getFilter() {
    //me van a dar un dato, yo buscare por
    // estos campos:
    // title, editorial, author
    // y ver si viene filtrado por genre,type o lenguage
}

async function agregarBook(nuevoBook) {
    //nuevoBook hacer validacion middlwware
    //no agregamos id porque mongo ya lo hace? nose si es bueno o malo
    //depende porque si tengo que buscar manualmente o no
    // se puede usar create();
    try {
        const book = new Book(nuevoBook);
        await book.save();
        return book
    } catch (error) {
        console.log(error)
        return false
    }
}
async function putBook() {

}
module.exports = {
    getAll,
    agregarBook,
    getById,
}