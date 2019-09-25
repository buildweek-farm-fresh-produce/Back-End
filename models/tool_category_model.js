const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findById,
}


function find(){
    return db('tool_category')
}

async function add(category_data){
    const [newCategory] = await db("tool_category")
        .insert(category_data)
        .returning("*");

    return newCategory;
}
function findById(id){
    return db('tool_category')
    .where({id: id})
    .first()
}

