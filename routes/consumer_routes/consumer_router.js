const express = require('express')
const Consumers = require('../../models/users/consumer_user_model.js')
const router = express.Router();

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
    Consumers.ordersByCustomerId(id)
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

    Consumers.findLocalFarms(cityId, stateId)
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({
            message: "We couldn't get the users at this time."
        }))
})

router.post('/order/:id', (req, res) => {
    const orderData = req.body

})

module.exports = router;

