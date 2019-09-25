const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    find,
    findById,
    findByUsername,
}

function add(userData){
    return db('user_farmer')
    .insert(userData)
    .then(([id]) => findById(id))
    .catch(err => err);
}

function find(){
    return db('user_farmer');
}

function findById(id){
    return db('user_farmer')
    .where({id: id})
    .first();
}

function findByUsername(username){
    return db('user_farmer')
    .where({username: username})
    .first();
}