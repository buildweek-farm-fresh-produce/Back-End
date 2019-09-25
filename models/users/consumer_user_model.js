const db = require('../../data/dbConfig.js')

module.exports = {
    findById,
    findByUsername,
    addUser,
    find
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

function find() {
    return db('consumer_user');
}

async function addUser(data) {
    const [newUser] = await db("consumer_user")
        .insert(data)
        .returning("*");

    return newUser;
}


