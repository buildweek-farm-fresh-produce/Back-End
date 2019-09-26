const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    findByName,
    findProduceItems,
}

function find(){
    return db('city');
}

function findById(id){
    return db('city')
    .where({id: id})
    .first();
}

function add(city){
    return db('city')
    .insert(city)
    .then( ([id]) => findById(id))
    .catch( err => err);
}

function findByName(name){
    return db('city')
    .where({name: name})
    .first();
}

function findProduceItems(id){
    return db('city as c')
    .where({'c.id': id})
    .join('farm as f', 'f.city_id', 'c.id')
    .join('produce_item as pi', 'pi.farm_id', 'f.id')
    .join('produce_category as pc', 'pc.id', 'pi.category_id')
    .select('c.id as city_id', 'c.name as city_name','pi.id as produce_id', 'pi.name as produce_name', 'pi.quantity', 'pi.price as unit_price', 'pc.name as produce_category', 'f.name as seller')
}