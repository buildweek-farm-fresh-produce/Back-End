const db = require('../../data/dbConfig.js')

module.exports = {
    findById,
    findByUsername,
    addUser
}

function findById(id) {
    return db('consumer_user')
        .where({
            id: id
        })
        .first();
}

function findByUsername(username) {
    return db('consumer_user')
        .where({
            username: username
        })
        .first();
}

function addUser(data) {
    return db('consumer_user')
        .insert(data)
        .then(([id]) => findById(id))
}

