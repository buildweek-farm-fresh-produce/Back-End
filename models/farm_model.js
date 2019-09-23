const db = require('../data/dbConfig.js')

module.exports = {
    findLocal
}

function findLocal(cityId, stateId) {
    return db('farm')
        .where({
            city_id: cityId,
            state_id: stateId
        })
        .select('farm.name', 'farm.address', 'farm.year_founded', 'farm.bio', 'farm.id')
}