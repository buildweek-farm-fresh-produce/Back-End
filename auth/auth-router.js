const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const ShopUsers = require('../models/users/consumer_user_model.js')
const FarmerUsers = require('../models/users/farmer_user_model.js')
const generateToken = require('../middleware/generateToken.js')
const checkFarmerUsername = require('../middleware/check_username_farmer')
const checkConsumerUsername = require('../middleware/check_username_consumer')


/**
 * @api {post} /api/auth/shop/login Consumer Login Request
 * @apiName Consumer Login
 * @apiGroup Auth
 * 
 * 
 * @apiSuccess {String} message User Message
 * @apiSuccess {Object} user User User
 * @apiSuccess {String} token User Token
 * 
 * @apiParamExample Example Body:
 * {
 *	"username": "example",
 *	"password": "password"
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "message": "Welcome",
 *  "user": {
 *    "id": 5,
 *    "username": "example",
 *    "email": "example@gmonk.com",
 *    "password": "$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS",
 *    "city_id": 1,
 *    "state_id": 1
 *  },
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us"
 * }
 */

router.post('/shop/login', (req, res) => {
    let credentials = req.body
    if (credentials.username && credentials.password) {
        ShopUsers.findByUsername(credentials.username)
            .then(user => {
                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    const token = generateToken(user, 'consumer')
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
        res.status(400).json({
            message: 'Please provide a username and password.'
        })
    }
})

/**
 * @api {post} /api/auth/shop/register Consumer Register Request
 * @apiName Consumer Register
 * @apiGroup Auth
 * 
 * 
 * @apiSuccess {String} message User Message
 * @apiSuccess {Object} user User User
 * @apiSuccess {String} token User Token
 * 
 * @apiParamExample Example Body:
 * {
 *	"username": "example",
 *	"email": "example@gmonk.com",
 *	"password": "password",
 *	"city_id": "1",
 *	"state_id": "1"
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 CREATED
 * {
 *  "message": "Welcome",
 *  "user": {
 *    "id": 5,
 *    "username": "example",
 *    "email": "example@gmail.com",
 *    "password": "$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS",
 *    "city_id": 1,
 *    "state_id": 1
 *  },
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us"
 * }
 */

router.post('/shop/register', checkConsumerUsername, (req, res) => {
    let userInfo = req.body

    if (userInfo.username && userInfo.email && userInfo.password && userInfo.city_id && userInfo.state_id) {
        const hash = bcrypt.hashSync(userInfo.password, 14)
        userInfo.password = hash
        ShopUsers.addUser(userInfo)
            .then(user => {
                const token = generateToken(user, 'consumer')
                res.status(201).json({
                    message: 'Created successfully.',
                    user: user,
                    token: token
                })
            })
            .catch(err => res.status(500).json({
                message: 'An unexpected error occurred when adding the user, the error is most likely an unavailable username.'
            }))
    } else {
        res.status(401).json({
            message: 'Please fill out the required fields for user onboarding.'
        })
    }
})

/**
 * @api {post} /api/auth/farmer/login Farmer Login Request
 * @apiName Farmer Login
 * @apiGroup Auth
 * 
 * 
 * @apiSuccess {Object} user User User
 * @apiSuccess {String} token User Token
 * 
 * @apiParamExample Example Body:
 * {
 *	"username": "example",
 *	"password": "password"
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "user": {
 *    "id": 5,
 *    "username": "example",
 *    "email": "example@gmonk.com",
 *    "password": "$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS",
 *  },
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us"
 * }
 */

router.post('/farmer/login', (req, res) => {
    const credentials = req.body
    if(credentials.password && credentials.username){
        FarmerUsers.findByUsername(credentials.username)
            .then( user => {
                if(user && bcrypt.compareSync(credentials.password, user.password)){
                    const token = generateToken(user, 'farmer')
                    res.status(200).json({user: user, token: token})
                }else{
                    res.status(401).json({message: 'invalid credentials'})
                }
            })
    }else{
        res.status(401).json({message: 'please provide user credentials.'})
    }
})

/**
 * @api {post} /api/auth/farmer/register Farmer Register Request
 * @apiName Farmer Register
 * @apiGroup Auth
 * 
 * 
 * @apiSuccess {String} message User Message
 * @apiSuccess {Object} user User User
 * @apiSuccess {String} token User Token
 * 
 * @apiParamExample Example Body:
 * {
 *	"username": "example",
 *	"email": "example@gmonk.com",
 *	"password": "password"
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 CREATED
 * {
 *  "message": "Welcome",
 *  "user": {
 *    "id": 5,
 *    "username": "example",
 *    "email": "example@gmail.com",
 *    "password": "$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS"
 *  },
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us"
 * }
 */

router.post('/farmer/register', checkFarmerUsername, (req, res) => {
    let userInfo = req.body

    if (userInfo.username && userInfo.email && userInfo.password) {
        const hash = bcrypt.hashSync(userInfo.password, 14)
        userInfo.password = hash
        FarmerUsers.add(userInfo)
            .then(user => {
                const token = generateToken(user, 'farmer')
                res.status(201).json({
                    message: 'Created successfully.',
                    user: user,
                    token: token
                })
            })
            .catch(err => res.status(500).json({
                message: 'An unexpected error occurred when adding the user, the error is most likely an unavailable username.'
            }))
    } else {
        res.status(401).json({
            message: 'Please fill out the required fields for user onboarding.'
        })
    }
})

module.exports = router