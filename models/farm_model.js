const db = require('../data/dbConfig.js')

module.exports = {
    findLocal,
    add,
    find,
    update,
    remove,
    findById,
}

function findLocal(cityId, stateId) {
    return db('farm')
        .where({
            city_id: cityId,
            state_id: stateId
        })
        .select('farm.name', 'farm.address', 'farm.year_founded', 'farm.bio', 'farm.id')
}

function find(){
    return db('farm')
}

async function add(values){
    const [newFarm] = await db('farm')
    .insert(values)
    .returning('*')

    return newFarm
}

async function update(values, id){
    await db('farm')
    .where({id: id})
    .update(values);

    const [updateRes] = await db('farm')
    .where({id: id})
    .returning('*');

    return updateRes
}

function remove(id){
    return db('farm')
    .where({id: id})
    .delete();
}

function findById(id){
    return db('farm')
    .where({id: id})
    .first();
}