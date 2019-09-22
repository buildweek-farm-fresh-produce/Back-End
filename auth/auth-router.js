const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const ShopUsers = require('../models/users/consumer_user_model.js')
const generateToken = require('../middleware/generateToken.js')

router.post('/shop/login', (req, res) => {
    let credentials = req.body
    if (credentials.username && credentials.password) {
        ShopUsers.findByUsername(credentials.username)
            .then(user => {
                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    const token = generateToken(user)
                    res.status(200).json({
                        message: 'Welcome',
                        user: user,
                        token: token
                    })
                } else {
                    res.status(400).json({
                        message: 'Invalid credentials.'
                    })
                }
            })
            .catch(err => res.status(500).json({
                message: "We couldn't process your login at the moment"
            }))
    } else {
        res.status(401).json({
            message: 'Please provide a username and password.'
        })
    }
})

router.post('/shop/register', (req, res) => {
    let userInfo = req.body

    if (userInfo.username && userInfo.email && userInfo.password && userInfo.city_id && userInfo.state_id) {
        const hash = bcrypt.hashSync(userInfo.password, 14)
        userInfo.password = hash
        ShopUsers.addUser(userInfo)
            .then(user => {
                const token = generateToken(user)
                res.status(201).json({
                    message: 'Created successfully.',
                    user: user,
                    token: token
                })
            })
            .catch(err => res.status(200).json({
                message: 'An unexpected error occurred when adding the user.'
            }))
    } else {
        res.status(401).json({
            message: 'Please fill out the required fields for user onboarding.'
        })
    }
})

module.exports = router