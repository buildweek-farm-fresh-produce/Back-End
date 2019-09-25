const db = require('../data/dbConfig')

module.exports = {
    add,
    findByFarmId,
    findByToolId
}

async function add(toolData) {
    const [newTool] = await db("farm_tool")
        .insert(toolData)
        .returning("*");

    return {
        new_farm_tool: newTool
    };
}

function findByFarmId(id) {
    return db('farm_tool as ft')
        .where({
            'ft.farm_id': id
        })
        .join('tool as t', 't.id', 'ft.tool_id')
        .select('t.name', 'ft.quantity', 'ft.id as farm_tool_id', 'ft.farm_id')
}

function findByToolId(toolId, farmId) {
    return db('farm_tool as ft')
        .where({
            'ft.farm_id': farmId,
            'ft.tool_id': toolId
        })
        .join('tool as t', 't.id', 'ft.tool_id')
        .select('t.name', 'ft.quantity', 'ft.id as farm_tool_id', 'ft.farm_id')
}