const modelBook = require('../model/modelBook.js');

function getAll(req,res){
    const books = modelBook.getAll();
    try {
        if(books.length > 0) res.status(200).json(books);
        res.status(404).json({mensaje : "sin datos"});
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    getAll
}