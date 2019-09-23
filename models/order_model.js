const db = require('../data/dbConfig.js')

module.exports = {
    add,
    findByCustomerId
}

function add(orderDetails, orderItems) {
    return db('order')
        .insert(orderDetails)
        .then(id => {
            for (let i = 0; i < orderItems.length; i++) {
                return db('order_item')
                    .insert(orderItems[i])
            }
        })
}


function findByCustomerId(id) {
    return db('order as o')
        .where({
            'o.consumer_id': id
        })
        .join('order_item as oi', 'oi.consumer_id', 'o.consumer_id')
        .join('farm as f', 'f.id', 'oi.farm_id')
        .join('produce_item as pi', 'pi.id', 'oi.produce_item_id')
        .select('o.shipping_address', 'o.purchase_date', 'o.delivered', 'pi.name as item_purchased', 'oi.quantity', 'f.name as seller')
        .orderBy('o.purchase_date', 'desc')
}
