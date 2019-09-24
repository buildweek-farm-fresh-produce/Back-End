const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findById,
}


function find(){
    return db('tool_category')
}

function add(category_data){
    return db('tool_category')
    .insert(category_data)
    .then(([id]) => findById(id))
}
function findById(id){
    return db('tool_category')
    .where({id: id})
    .first()
}

