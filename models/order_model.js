const db = require('../data/dbConfig.js')

module.exports = {
    add,
    findByCustomerId
}

function add(orderDetails, orderItems) {
    return db('order')
        .insert(orderDetails)
        .then(() => {
            let dataToSubmit
            for (let i = 0; i < orderItems.length; i++) {
                dataToSubmit = {
                    quantity: orderItems[i].quantity,
                    produce_item_id: orderItems[i].produce_item_id,
                    order_id: orderItems[i].order_id,
                    farm_id:orderItems[i].farm_id,
                    consumer_id: orderItems[i].consumer_id
                }
                db('order_item')
                    .insert(dataToSubmit)
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
        .join('produce_item as pi', {
            'pi.farm_id': 'oi.farm_id'
        })
        .select('o.shipping_address', 'o.purchase_date', 'o.delivered', 'pi.name as item_purchased', 'oi.quantity', 'f.name as seller')
        .orderBy('o.purchase_date', 'desc');
};