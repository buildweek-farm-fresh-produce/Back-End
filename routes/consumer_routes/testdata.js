let orderId = uuid()

const order = {
    order_id: orderId,
    shipping_address:'123 Main ST.',
    purchase_date:'2019-18-07',
    delivered:false,
    consumer_id:1,
    order_items:[
        {
            quantity:2,
            produce_item_id: 2,
            order_id: orderId,
            farm_id:3
        },
        {
            quantity:5,
            produce_item_id: 5,
            order_id: orderId,
            farm_id:1
        },
        {
            quantity:6,
            produce_item_id: 5,
            order_id: orderId,
            farm_id:4
        },
        {
            quantity:8,
            produce_item_id: 1,
            order_id: orderId,
            farm_id:2
        },
        {
            quantity:5,
            produce_item_id: 4,
            order_id: orderId,
            farm_id:2
        },
        {
            quantity:8,
            produce_item_id: 2,
            order_id: orderId,
            farm_id:4
        },
        {
            quantity:5
            produce_item_id: 1,
            order_id: orderId,
            farm_id:4,
        },
    ]
}