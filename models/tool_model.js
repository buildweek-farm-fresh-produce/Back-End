const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findById,
    update,
    remove,
}

function add(toolData){
    return db('tool')
    .insert(toolData)
    .then(([id]) => findById(id))
}

function find(){
    return db('tool')
}

function findById(id){
    return db('tool')
    .where({id: id})
    .first()
}

function update(id, values){
    return db('tool')
    .where({id: id})
    .first()
    .update(values)
    .then(([id]) => findById(id))
    .catch( err => err);
}

function remove(id){
    return db('tool')
    .where({id: id})
    .delete();
}