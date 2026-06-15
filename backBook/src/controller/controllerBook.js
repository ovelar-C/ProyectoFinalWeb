const modelBook = require('../model/modelBook.js');

function getAll(req,res){
    const books = modelBook.getAll();
    try {
        if(books.length > 0){
            return res.status(200).json(books);
        }else{
            return res.status(404).json({mensaje : "sin datos"});
        }
    } catch (error) {
        console.log(error)
    }
}
function filter(req,res){
    const filtros = req.query;
    console.log(filtros);
    
    const dataFiltrados = modelBook.filter(filtros);
    
    if(dataFiltrados){
        return res.status(200).json(dataFiltrados);
    }else{
        return res.status(400).json({mensaje : "error al aplicar filtros"});
    }

}
module.exports={
    getAll,
    filter
}