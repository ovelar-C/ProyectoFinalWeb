const serviceBook = require('../services/serviceBook.js');

async function getAll(req,res){
    try {
        const books =  await serviceBook.getAll();

        if(books.length > 0){
            return res.status(200).json(books);
        }else{
            return res.status(404).json({mensaje : "sin datos"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje : "error server"})
    }
}

async function agregarBook(req,res){
    try {
        const  book = await serviceBook.agregarBook(req.body);
        if(!book) return res.status(404).json({error : error.message});
        return res.status(202).json(book);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : error.message});
    }
}


module.exports={
    getAll,
    agregarBook,
}