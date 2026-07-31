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
async function getById(req,res){
    try {
        const book = await serviceBook.getById(req.params.id);
        if(!book) return res.status(404).json({mensaje : "error al buscar pot id"});
        return res.status(200).json(book);
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje: "error server"});
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
async function patchBook(req, res){
    try {
        const id = req.params.id;
        const updateBook = await serviceBook.patchBook(id,req.body);
        if(!updateBook) return res.status(400).json({mensaje : "no se pudo actualizar"});
        return res.status(200).json(updateBook);
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje : "error server"});
    }
}

module.exports={
    getAll,
    agregarBook,
    getById,
    patchBook
}