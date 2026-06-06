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

module.exports = {
    getAll
}