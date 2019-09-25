const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findByFarmId,
    findByName,
    update,
    remove,
}

async function add(toolData){
    const [newTool] = await db("tool")
            .insert(toolData)
            .returning("*");

    return {tool_added: newTool};
}

async function find(){
    return db('tool')
}

async function findByFarmId(farmId){
    const [tools] = await db('farm_tool as ft')
    .where({'ft.farm_id': farmId})
    .join('tool as t', 't.id', 'ft.tool_id')
    .join('tool_category as tc', 'tc.id', 't.tool_category_id')
    .select('t.id as tool_id:', 't.name as tool_name', "ft.quantity as quantity", "tc.name as tool_category", 'tc.name as tool_category_id');

    return tools
}

function findByName(name){
    return db('tool')
    .where({name: name})
    .first();
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