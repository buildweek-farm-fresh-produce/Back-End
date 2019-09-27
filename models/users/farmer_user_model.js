const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    find,
    findById,
    findByUsername,
}

async function add(userData){
    const [newUser] = await db('user_farmer')
    .insert(userData)
    .returning('*')

    return newUser
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