const router = require('express').Router()
const States = require('../models/location/state_model.js')
const Cities = require('../models/location/city_model')

/**
 * @api {get} /api/locations/states Get States Location
 * @apiName GetStates
 * @apiGroup Location
 * 
 * 
 * @apiSuccess {Objects[]} states array of state objects available for selection
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "states": [
 *    {
 *      "id": 1,
 *      "name": "Illinois"
 *    },
 *    {
 *      "id": 2,
 *      "name": "California"
 *    },
 *    {
 *      "id": 3,
 *      "name": "New York"
 *    }
 *  ]
 * }
 */

router.get('/states', ( req, res ) => {
    States.find()
        .then(states => res.status(200).json({states}))
        .catch(err => res.status(500).json(err))
})

/**
 * @api {get} /api/locations/cities Get Cities Location
 * @apiName GetCities
 * @apiGroup Location
 * 
 * 
 * @apiSuccess {Objects[]} cities array of city objects available for selection
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "cities": [
 *    {
 *      "id": 1,
 *      "name": "Chicago"
 *    },
 *    {
 *      "id": 2,
 *      "name": "San Francisco"
 *    },
 *    {
 *      "id": 3,
 *      "name": "New York"
 *    }
 *  ]
 * }
 */

router.get('/cities', ( req, res ) => {
    Cities.find()
        .then(cities => res.status(200).json({cities}))
        .catch(err => res.status(500).json(err))
})

module.exports = router