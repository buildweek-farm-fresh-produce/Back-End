const express = require('express')
const Consumers = require('../../models/users/consumer_user_model.js')
const Farms = require('../../models/farm_model.js')
const Orders = require('../../models/order_model.js')
const Categories = require('../../models/categories_model.js')
const router = express.Router();
const uuidv1 = require('uuid/v1');

/**
 * @api {get} /api/consumers/:id Get Consumer By Id
 * @apiName GetConsumerById
 * @apiGroup Consumers
 * 
 * @apiParam {Number} id User Id
 * 
 * @apiSuccess {Number} id User_Id
 * @apiSuccess {String} username User Username
 * @apiSuccess {String} email User Email
 * @apiSuccess {String} password User Password
 * @apiSuccess {Number} city_id User City_Id
 * @apiSuccess {Number} state_id User State_Id
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "id": 1,
 *  "username": "consumer_1",
 *  "email": "consumer_1@gmail.com",
 *  "password": "password",
 *  "city_id": 1,
 *  "state_id": 1
 * }
 */

 //! go to 12 minutes to see how to handle array documentation
 //! 16 MIN for post req

router.get('/:id', (req, res) => {
    const {
        id
    } = req.params
    Consumers.findById(id)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({
            message: "We couldn't get the users at this time."
        }))
})

/**
 * @api {get} /api/:consumerId/orders Get Consumer Order History
 * @apiName GetConsumerOrders
 * @apiGroup Consumers
 * 
 * @apiParam {Number} id Consumer Id
 * 
 * @apiSuccess {Objects[]} orders array of a consumers past orders
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "recent_orders": [
 *    {
 *      "shipping_address": "Example Rd.",
 *      "purchase_date": "2019-10-07",
 *      "delivered": false,
 *      "item_purchased": "corn",
 *      "quantity": 18,
 *      "seller": "A.R. Farms"
 *    },
 *    {
 *      "shipping_address": "Example Rd.",
 *      "purchase_date": "2019-10-07",
 *      "delivered": false,
 *      "item_purchased": "potato",
 *      "quantity": 5,
 *      "seller": "Organic Farms"
 *    },
 *    {
 *      "shipping_address": "Example Rd.",
 *      "purchase_date": "2019-10-07",
 *      "delivered": false,
 *      "item_purchased": "potato",
 *      "quantity": 6,
 *      "seller": "Blueberry Farms"
 *    }
 *  ]
 * }
 */

router.get('/:id/orders', (req, res) => {
    const {
        id
    } = req.params
    Orders.findByCustomerId(id)
        .then(orders => {
            orders.forEach(order => {
                if (order.delivered) {
                    order.delivered = true
                } else {
                    order.delivered = false
                }
            })
            res.status(200).json({recent_orders: orders})
        })
        .catch(err => res.status(500).json({
            message: "We couldn't get your orders at this time."
        }))
})

/**
 * @api {get} /api/consumers/farms/:cityId/:stateId Get Local Farms
 * @apiName GetLocalFarms
 * @apiGroup Consumers
 * 
 * @apiParam {Number} cityId City_Id
 * @apiParam {Number} stateId State_Id 
 * 
 * @apiSuccess {Objects[]} farms array of farm objects near consumer location
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "name": "A.R. Farms",
 *    "address": "2213 Orchard Rd.",
 *    "year_founded": 1908,
 *    "bio": "We are a farm.",
 *    "id": 2
 *  },
 *  {
 *    "name": "Blueberry Farms",
 *    "address": "21576 Albers Rd.",
 *    "year_founded": 1963,
 *    "bio": "Locally Grown Produce.",
 *    "id": 4
 *  }
 * ]
 */

router.get('/farms/:cityId/:stateId', (req, res) => {
    const {
        cityId,
        stateId
    } = req.params

    Farms.findLocal(cityId, stateId)
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({
            message: "We couldn't get the users at this time."
        }))
})

/**
 * @api {post} /api/auth/consumers/order/:consumerId Consumer Order Request
 * @apiName Consumer Order
 * @apiGroup Consumer
 * 
 * 
 * @apiSuccess {Object} Order consumer Order
 * 
 * @apiParamExample Example Body:
 * {
 *    "shipping_address": "Test Rd.",
 *    "purchase_date": "2019-10-07",
 *    "delivered": 0,
 *    "order_items":[
 *        {
 *            "quantity":18,
 *            "produce_item_id": 2,
 *            "farm_id":2
 *        },
 *        {
 *            "quantity":5,
 *            "produce_item_id": 5,           
 *            "farm_id":1
 *        },
 *        {
 *            "quantity":6,
 *            "produce_item_id": 5,
 *            "farm_id":4
 *        }
 *    ]
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 Created
 * {
 *  "order": {
 *    "order_details": 30,
 *    "orderItems": {
 *      "shipping_address": "Test Rd.",
 *      "purchase_date": "2019-10-07",
 *      "delivered": 0,
 *      "item_purchased": "corn",
 *      "quantity": 18,
 *      "seller": "A.R. Farms"
 *    }
 *  }
 * }
 */

router.post('/order/:id', (req, res) => {
    const consumerId = req.params.id
    const orderId = uuidv1();
    let order = req.body
    let orderItems = order.order_items
    for (let i = 0; i < orderItems.length; i++) {
        orderItems[i].order_id = orderId
        orderItems[i].consumer_id = Number(consumerId)
    }
    order.id = orderId
    orderDetails = {
        "id": order.id,
        "shipping_address": order.shipping_address,
        "purchase_date": order.purchase_date,
        "delivered": order.delivered,
        "consumer_id": Number(consumerId),
    }
        .then(order => res.status(201).json({
            order: order
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

/**
 * @api {get} /api/consumers/shop/:category/:categoryId Get Shopping Category Items
 * @apiName GetCategoryItems
 * @apiGroup Shopping
 * 
 * @apiParam {Number} categoryId Category_Id
 * 
 * @apiSuccess {Objects[]} produce item array of produce items in specified category
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 3,
 *    "name": "apple",
 *    "quantity": 100,
 *    "price": 1.8,
 *    "category_id": 1,
 *    "farm_id": 2,
 *    "farm_name": "A.R. Farms"
 *  },
 *  {
 *    "id": 4,
 *    "name": "peach",
 *    "quantity": 100,
 *    "price": 1.95,
 *    "category_id": 1,
 *    "farm_id": 2,
 *    "farm_name": "A.R. Farms"
 *  }
 * ]
 */

router.get('/shop/category/:id', (req, res) => {
    const { id } = req.params
    Categories.findById(id)
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch( err => res.status(200).json(err))
})

/**
 * @api {get} /api/consumers/shop/categories Get Shopping Categories
 * @apiName GetCategories
 * @apiGroup Shopping
 * 
 * @apiSuccess {Objects[]} categories array of produce categories to shop from.
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 1,
 *    "name": "fruits"
 *  },
 *  {
 *    "id": 2,
 *    "name": "vegetables"
 *  },
 *  {
 *    "id": 3,
 *    "name": "grains"
 *  },
 *  {
 *    "id": 4,
 *    "name": "meats"
 *  },
 *  {
 *    "id": 5,
 *    "name": "dairy"
 *  }
 * ]
 */

router.get('/shop/categories', (req, res) => {
    Categories.find()
    .then( categories => res.status(200).json(categories))
    .catch( err => res.status(200).json(err))
})

module.exports = router;