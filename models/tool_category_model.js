const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findById,
    update,
    remove,
}

function add(category_data){
    return db('tool_category')
    .insert(category_data)
    .then(([id]) => findById(id))
}

function find(){
    return db('tool_category')
}

function findById(id){
    return db('tool_category')
    .where({id: id})
    .first()
}

function update(id, values){
    return db('tool_category')
    .where({id: id})
    .first()
    .update(values)
    .then(([id]) => findById(id))
    .catch( err => err);
}

function remove(id){
    return db('tool_category')
    .where({id: id})
    .delete();
}