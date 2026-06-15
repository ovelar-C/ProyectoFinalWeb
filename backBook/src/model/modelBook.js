const fs = require('fs');
const path = require('path');
const ubiBook = path.join(__dirname, '../../dataMock.json');

function readData(){
    try {
        return JSON.parse(fs.readFileSync(ubiBook, 'utf-8'));
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getAll(){
    return readData();
}
function filter(filtros){
    //claro aca filtramos lo que venga de parametro con mi data
    // y solo validamos los que coicidan y dependiendo que campos son
    //hacemos su filtrado
    const books = readData();
    const resultado = books.filter(book=>{
        //{title : "el mundo de sofia"}
        //[["title","el mundo de sofia"]]
        //cuidado con los acentos
        return Object.entries(filtros).every(([campo,value]) =>{
            return book[campo].toLowerCase() === value.toLowerCase();
        })
    })
    console.log(resultado);
    if(resultado.length == 0){
        return false
    }
    return resultado;
}

module.exports = {
    getAll,
    filter
}