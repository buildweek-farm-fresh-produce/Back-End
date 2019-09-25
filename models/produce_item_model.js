const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findItemById,
    update,
    remove
}

function find(farmId){
    return db('produce_item')
    .where({farm_id: farmId});
}

async function add(values){
    const [added] = await db('produce_item')
    .insert(values)
    .returning('*')

    return added
}

function findItemById(itemId){
    
}

async function update(values, id){
    await db('produce_item')
    .where({id: id})
    .update(values);

    const [updateRes] = await db('produce_item')
    .where({id: id})
    .returning('*');

    return updateRes
}

function remove(id){
    return db('produce_item')
    .where({id: id})
    .delete()
}
