const db = require('../data/dbConfig.js')

module.exports = {
    add,
    findByCustomerId,
}

async function add(orderDetails, orderItems) {
    const [orderResults] = await db('order')
        .insert(orderDetails)
        .returning("*");

    let dataToSubmit
    for (let i = 0; i < orderItems.length; i++) {
        dataToSubmit = {
            quantity: orderItems[i].quantity,
            produce_item_id: orderItems[i].produce_item_id,
            farm_id: orderItems[i].farm_id,
            order_id: orderItems[i].order_id,
            consumer_id: orderItems[i].consumer_id
        }
        await db('order_item')
            .insert(dataToSubmit);

    }
    
    const [newOrderItems] = await findByCustomerId(orderDetails.consumer_id)
        
    return {order_details: orderResults, orderItems: newOrderItems}
}


function findByCustomerId(id) {
    return db('order_item as oi')
        .where({
            'oi.consumer_id': id
        })
        .join('order as o', 'o.id', 'oi.order_id')
        .join('farm as f', 'f.id', 'oi.farm_id')
        .join('produce_item as pi', 'pi.id', 'oi.produce_item_id')
        .select('o.shipping_address', 'o.purchase_date', 'o.delivered', 'pi.name as item_purchased', 'oi.quantity', 'f.name as seller')
        .orderBy('o.purchase_date', 'desc');
};
