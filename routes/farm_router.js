const router = require('express').Router()
const Farms = require('../models/farm_model.js')

router.get('/', (req, res) => {
    Farms.find()
    .then(farms => {
        res.status(200).json(farms)
    })
    .catch(err => res.status(500).json(err))
})

/**
 * @api {get} /api/farms/:farmId Get Farm By Id
 * @apiName GetFarmByID
 * @apiGroup Farm
 * 
 * 
 * @apiSuccess {Object} farm Farm farm
 * 
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "id": 1,
 *  "name": "Organic Farms",
 *  "address": "1213 Dairy Rd.",
 *  "year_founded": 1955,
 *  "bio": "We sell only the best.",
 *  "farmer_id": 1,
 *  "city_id": 1,
 *  "state_id": 1
 * }
 */

router.get('/:farmId', (req, res) => {
    const {farmId} = req.params
    Farms.findById(farmId)
    .then(farm => {
        res.status(200).json(farm)
    })
    .catch(err => res.status(500).json(err))
})

/**
 * @api {post} /api/farms/:farmerId Add Farm
 * @apiName AddFarm
 * @apiGroup Farm
 * 
 * 
 * @apiSuccess {Object} farm Farm farm
 * 
 * @apiParamExample Example Body:
 * {
 *  "name": "Example Farm",
 *  "address": "23528 Example Rd.",
 *  "year_founded": "1894",
 *  "bio": "Locally Grown Produce.",
 *  "city_id": 2,
 *	"state_id": 2
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 CREATED
 * {
 *   "id": 5,
 *   "name": "J.W. Farms",
 *   "address": "23528 Milnes Rd.",
 *   "year_founded": 1894,
 *   "bio": "Locally Grown Produce.",
 *   "farmer_id": 3,
 *   "city_id": 2,
 *   "state_id": 2
 * }
 */

router.post('/:farmerId', (req, res) => {
    const { farmerId } = req.params
    let farmData = req.body
    farmData.farmer_id = Number(farmerId)
    if(farmData.name && farmData.year_founded && farmData.city_id && farmData.state_id){
        Farms.add(farmData)
            .then( farm => {
                res.status(201).json(farm)
            })
            .catch( err => res.status(500).json({message: 'there was an error adding your farm'}))
    }else{
        res.status(400).json({message: 'please fill out all required fields.'})
    }
})

/**
 * @api {put} /api/farms/:farmId Update Farm
 * @apiName UpdateFarm
 * @apiGroup Farm
 * 
 * 
 * @apiSuccess {Object} farm Farm farm
 * 
 * @apiParamExample Example Body:
 * {
 *  "name": "Example Farms",
 *  "address": "23528 Example Rd.",
 *  "year_founded": "1894",
 *  "bio": "Locally Grown Produce.",
 *	"farmer_id": 3,
 *  "city_id": 2,
 *	"state_id": 2
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "id": 5,
 *  "name": "Example Farms",
 *  "address": "23528 Example Rd.",
 *  "year_founded": 1894,
 *  "bio": "Locally Grown Produce.",
 *  "farmer_id": 3,
 *  "city_id": 2,
 *  "state_id": 2
 * }
 */

router.put('/:farmId', (req, res) => {
    const { farmId } = req.params

    let updatedFarm = req.body
    updatedFarm.id = Number(farmId)

    if(updatedFarm.name && updatedFarm.year_founded && updatedFarm.city_id && updatedFarm.state_id && updatedFarm.farmer_id){
        Farms.update(updatedFarm, farmId)
        .then( updated => res.status(200).json(updated))
        .catch( err => res.status(500).json(err))
    }else{
        res.status(400).json({message: 'please fill out all required fields.'})
    }
})

/**
 * @api {delete} /api/farms/:farmId Delete A Farm
 * @apiName DeleteFarm
 * @apiGroup Farm
 * 
 * 
 * @apiSuccess {Object} message Message message
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "message": "deleted successfully"
 * }
 */

router.delete('/:farmId', (req, res) => {
    const { farmId } = req.params

    Farms.remove(farmId)
    .then(deleted => {
        res.status(200).json({message: 'deleted successfully'})
    })
    .catch( err => {
        res.status(500).json({message: 'unexpected error'})
    })
})

module.exports = router