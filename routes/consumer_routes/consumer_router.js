const express = require('express')
const Consumers = require('../../models/users/consumer_user_model.js')
const Farms = require('../../models/farm_model.js')
const Orders = require('../../models/order_model.js')
const router = express.Router();
const uuidv1 = require('uuid/v1');

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
            res.status(200).json(orders)
        })
        .catch(err => res.status(500).json({
            message: "We couldn't get your orders at this time."
        }))
})

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
    console.log(orderDetails, orderItems)
    Orders.add(orderDetails, orderItems)
        .then(order => res.status(201).json({
            order: order
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

module.exports = router;