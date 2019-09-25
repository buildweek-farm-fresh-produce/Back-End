const router = require('express').Router();
const ProduceCategory = require('../models/categories_model.js')
const ProduceItem = require('../models/produce_item_model.js')

/**
 * @api {get} /api/farmers/produce/categories Get Produce Categories For A Farmer
 * @apiName GetProduceCategories
 * @apiGroup Farmers_Produce
 * 
 * 
 * @apiSuccess {Objects[]} produce_categories array of produce category objects available to farmers
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "categories": [
 *    {
 *      "id": 1,
 *      "name": "fruits"
 *    },
 *    {
 *      "id": 2,
 *      "name": "vegetables"
 *    },
 *    {
 *      "id": 3,
 *      "name": "grains"
 *    }
 *  ]
 * }
 */

router.get('/categories', (req, res) => {
    return ProduceCategory.find()
        .then(categories => res.status(200).json({categories: categories}))
        .catch( err => res.status(500).json({message: 'unexpected error'}))
})

/**
 * @api {post} /api/farmers/produce/categories Add Produce Category
 * @apiName AddProduceCategory
 * @apiGroup Farmers_Produce
 * 
 * 
 * @apiSuccess {Object} category_id Produce category_id
 * 
 * @apiParamExample Example Body:
 * {
 *	"name": "example"
 * }
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 CREATED
 * { 
 *  "new_category": {
 *    "id": 6,
 *    "name": "example"
 *  }
 * }
 */

router.post('/categories', (req, res) => {
    const categoryData = req.body
    if(categoryData.name){
        ProduceCategory.findByName(categoryData.name)
            .then( name => {
                if(name){
                    res.status(400).json({message: 'the category you are trying to add already exists.' })
                }else{
                    ProduceCategory.add(categoryData)
                        .then( category => res.status(201).json({new_category: category}))
                        .catch( err => res.status(500).json({error: "there has been an unexpected error"}))
                }
            })
            .catch( err => res.status(500).json({message: 'unexpected error'}))
    }else{
        res.status(400).json({message: 'Please provide a value for the category name'})
    }
})

/**
 * @api {get} /api/farmers/produce/:farmId Get All Produce For A Farm
 * @apiName GetFarmProduce
 * @apiGroup Farmers_Produce
 * 
 * 
 * @apiSuccess {Objects[]} produce_items array of produce item objects belonging to a farm
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "current_stock": [
 *    {
 *      "id": 5,
 *      "name": "potato",
 *      "quantity": 100,
 *      "price": 0.8,
 *      "category_id": 2,
 *      "farm_id": 3
 *    },
 *    {
 *      "id": 6,
 *      "name": "watermelon",
 *      "quantity": 100,
 *      "price": 0.95,
 *      "category_id": 2,
 *      "farm_id": 3
 *    }
 *  ]
 * }
 */

router.get('/:farmId', (req, res) => {
    const { farmId } = req.params
    ProduceItem.find(farmId)
        .then(items => res.status(200).json({current_stock: items}))
})

/**
 * @api {post} /api/farmers/produce/:farmId Add Produce Item
 * @apiName AddProduceItem
 * @apiGroup Farmers_Produce
 * 
 * 
 * @apiSuccess {Number} produce_item_id Produce produce_item_id
 * 
 * @apiParamExample Example Body:
 * {
 *	"name": "example",
 *  "quantity": 20,
 *  "price": 0.8,
 *  "category_id": 4
 * }
 * 
 * @apiSuccessExample Successful Response:
 * {
 *  "id": 8,
 *  "name": "example",
 *  "quantity": 20,
 *  "price": 0.8,
 *  "category_id": 1,
 *  "farm_id": 3
 * }
 */

router.post('/:farmId', (req, res) => {
    const { farmId } = req.params
    let produceData = req.body
    produceData.farm_id = farmId

    if(produceData.name && produceData.quantity && produceData.price && produceData.category_id){
        ProduceItem.add(produceData)
        .then( added => {
            res.status(201).json(added)
        })
        .catch( err => {
            res.status(500).json({message: 'unexpected error.'})
        })
    }else{
        res.status(400).json({message: 'please fill out all of the required fields.'})
    }
})

/**
 * @api {put} /api/farmers/produce/:farmId/:itemId Update Produce Item
 * @apiName UpdateProduceItem
 * @apiGroup Farmers_Produce
 * 
 * 
 * @apiSuccess {Object} produce_item Produce produce_item
 * 
 * @apiParamExample Example Body:
 * {
 *	"name": "example",
 *  "quantity": 20,
 *  "price": 0.8,
 *  "category_id": 4
 * }
 * 
 * @apiSuccessExample Successful Response:
 * {
 *  "id": 8,
 *  "name": "example",
 *  "quantity": 20,
 *  "price": 0.8,
 *  "category_id": 1,
 *  "farm_id": 3
 * }
 */

router.put('/:farmId/:itemId', (req, res) => {
    const {farmId, itemId} = req.params
    let updatedData = req.body
    updatedData.id = itemId
    updatedData.farm_id = farmId

    if(updatedData.name && updatedData.quantity && updatedData.price && updatedData.category_id){
        ProduceItem.update(updatedData, itemId)
            .then( updated => {
                res.status(200).json(updated)
            })
            .catch( err => {
                res.status(500).json(err)
            })
    }else{
        res.status(400).json({message:'please provide all fields '})
    }
})

/**
 * @api {delete} /api/farmers/produce/:itemId Delete Produce Item
 * @apiName DeleteProduceItem
 * @apiGroup Farmers_Produce
 * 
 * 
 * @apiSuccess {object} message Produce message with the request status
 * 
 * @apiSuccessExample Successful Response:
 * {
 *  "message": "successful deletion",
 * }
 */

router.delete('/:itemId', (req, res) => {
    const {itemId} = req.params
        ProduceItem.remove(itemId)
            .then( removed => {
                res.status(200).json(removed)
            })
            .catch( err => {
                res.status(500).json(err)
            })
})

module.exports = router