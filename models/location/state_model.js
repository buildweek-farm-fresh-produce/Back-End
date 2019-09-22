const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    findByName
}

function find(){
    return db('state');
}

function findById(id){
    return db('state')
    .where({id: id})
    .first();
}

function add(state){
    return db('state')
    .insert(state)
    .then( ([id]) => findById(id))
    .catch( err => err);
}

function findByName(name){
    return db('state')
    .where({name: name})
    .first();
}