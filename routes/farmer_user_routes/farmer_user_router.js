const express = require('express')
const Farmers = require('../../models/users/farmer_user_model.js')
const Orders = require('../../models/order_model.js')
const router = express.Router();

/**
 * @api {get} /api/farmers/:id Get Farmer By Id
 * @apiName GetFarmerById
 * @apiGroup Farmers
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
 *  "username": "emaxple_1",
 *  "email": "emaxple_1@gmail.com",
 *  "password": "password"
 * }
 */

router.get('/:id', (req, res) => {
    const {
        id
    } = req.params
    Farmers.findById(id)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({
            message: "We couldn't get the users at this time."
        }))
})

module.exports = router;