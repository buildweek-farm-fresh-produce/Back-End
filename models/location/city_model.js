const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    findByName
}

function find(){
    return db('city');
}

function findById(id){
    return db('city')
    .where({id: id})
    .first();
}

function add(city){
    return db('city')
    .insert(city)
    .then( ([id]) => findById(id))
    .catch( err => err);
}

function findByName(name){
    return db('city')
    .where({name: name})
    .first();
}