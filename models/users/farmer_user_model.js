const db = require('../../data/dbConfig.js')

module.exports = {
    findById,
    findByUsername,
    addUser,
}

function findById(id) {
    return db('user_farmer')
        .where({
            id: id
        })
        .first();
}

function findByUsername(username) {
    return db('user_farmer')
        .where({
            username: username
        })
        .first();
}

function addUser(data) {
    return db('user_farmer')
        .insert(data)
        .then(([id]) => findById(id))
}