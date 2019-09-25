const express = require('express')
const ToolsCategory = require('../models/tool_category_model')
const Tools = require('../models/tool_model.js')
const FarmTools = require('../models/farm_tool_model.js')
const router = express.Router();

/**
 * @api {get} /api/tools/categories Get Tool Categories
 * @apiName GetToolCategories
 * @apiGroup Tools
 * 
 * 
 * @apiSuccess {Objects[]} tools array of tool category objects available to farmers
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 1,
 *    "name": "machinery"
 *  },
 *  {
 *    "id": 2,
 *    "name": "hand"
 *  },
 *  {
 *    "id": 3,
 *    "name": "irrigation"
 *  }
 * ]
 */

router.get('/categories', (req, res) => {
    ToolsCategory.find()
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(500).json({
            error: err
        }))
})

/**
 * @api {get} /api/tools/category/:categoryId Get Tool Category By Id
 * @apiName GetToolCategoryById
 * @apiGroup Tools
 * 
 * 
 * @apiSuccess {Objects} tool_category tool category requested
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 *  {
 *    "id": 1,
 *    "name": "machinery"
 *  }
 */

router.get('/category/:id', (req, res) => {
    const {
        id
    } = req.params
    ToolsCategory.findById(id)
        .then(category => res.status(200).json(category))
        .catch(err => res.status(500).json(err))
})

/**
 * @api {post} /api/tools/categories Add Tool Category
 * @apiName AddToolCategory
 * @apiGroup Tools
 * 
 * @apiParamExample Example Body:
 * {
 *	"name": "example"
 * }
 * 
 * @apiSuccess {Object} of tool category posted
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 *  {
 *    "id": 1,
 *    "name": "example"
 *  }
 */

router.post('/categories', (req, res) => {
    const categoryData = req.body
    if (categoryData.name) {
        ToolsCategory.add(categoryData)
            .then((category) => res.status(201).json({
                category: category
            }))
            .catch(err => res.status(500).json({
                message: 'There was an error creating your category.'
            }))
    } else {
        res.status(401).json({
            message: 'Please provide the name for your category.'
        })
    }
})

/**
 * @api {post} /api/tools/farms/:farmId Add Tool
 * @apiName AddTool
 * @apiGroup Tools
 * 
 * @apiParamExample Example Body:
 *{
 *	"name": "Wheel Barrow" ,
 *	"tool_category_id": 2 ,
 *	"farm_tool_data": {
 *		"quantity": 3,
 *		"tool_id": 10
 *	}
 * }
 * 
 * @apiSuccess {Object} with new tool id
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 201 CREATED
 * {
 *  "new_tool": 23
 * }
 */

router.post('/farms/:farmId', (req, res) => {
    const toolBody = req.body
    const {
        farmId
    } = req.params

    let toolData = {
        name: toolBody.name,
        tool_category_id: toolBody.tool_category_id
    }

    let farmToolData = toolBody.farm_tool_data
    farmToolData.farm_id = farmId

    Tools.findByName(toolBody.name)
        .then(tool => {
            if (tool) {
                FarmTools.add(farmToolData)
                    .then(toolResponse => {
                        res.status(201).json({new_tool: toolResponse.new_farm_tool})
                    })
                    .catch(err => res.status(500).json({
                        message: 'unexpected error adding your new tool.'
                    }))
            } else {
                Tools.add(toolData)
                    .then(toolResponse => {
                        FarmTools.add(farmToolData)
                            .then(addedTool => {
                                res.status(201).json({
                                    newTool: addedTool
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: 'There was an error adding your tool.'
                                })
                            })
                    })
                    .catch(err => res.status(500).json({
                        message: 'unexpected error adding your new tool.'
                    }))
            }
        })
        .catch(err => res.status(500).json({message:'errr'}))

})

/**
 * @api {get} /api/tools/farm/:farmId Get Farms Tool By Id
 * @apiName Get A Farms Tools
 * @apiGroup Tools
 * 
 * 
 * @apiSuccess {Object[]} tools_array of a farms current tool inventory
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "name": "Harvester",
 *    "quantity": 10,
 *    "farm_tool_id": 13,
 *    "farm_id": 3
 *  },
 *  {
 *    "name": "Tree Shaker",
 *    "quantity": 20,
 *    "farm_tool_id": 14,
 *    "farm_id": 3
 *  },
 *  {
 *    "name": "Tiller",
 *    "quantity": 7,
 *    "farm_tool_id": 15,
 *    "farm_id": 3
 *  }
 * ]
 */

router.get('/farm/:id', (req, res) => {
    const { id } = req.params

    FarmTools.findByFarmId(id)
        .then( tools => {
            res.status(200).json(tools)
        })
        .catch( err => res.status(500).json(err))
})

/**
 * @api {get} /api/tools/:farmId/:farmId Get single Tool By Id
 * @apiName Get A Single Tool From A Farm
 * @apiGroup Tools
 * 
 * 
 * @apiSuccess {Object} object of a single tools status for a farm
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * {
 *  "name": "Tree Shaker",
 *  "quantity": 20,
 *  "farm_tool_id": 14,
 *  "farm_id": 3
 * }
 */

router.get('/:farmId/:toolId', (req, res) => {
    const { farmId, toolId } = req.params

    FarmTools.findByToolId(toolId, farmId)
        .then( tools => {
            res.status(200).json(tools[0])
        })
        .catch( err => res.status(500).json(err))
})

/**
 * @api {get} /api/tools/ Get All Tools
 * @apiName Get All Tools
 * @apiGroup Tools
 * 
 * 
 * @apiSuccess {Object} object of all tool options for a farm
 * 
 * @apiSuccessExample Successful Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "id": 1,
 *     "name": "Harvester",
 *     "tool_category_id": 1
 *   },
 *   {
 *     "id": 2,
 *     "name": "Tree Shaker",
 *     "tool_category_id": 1
 *   },
 *   {
 *     "id": 3,
 *     "name": "Tiller",
 *     "tool_category_id": 1
 *   },
 *   {
 *     "id": 4,
 *     "name": "Shovel",
 *     "tool_category_id": 2
 *   }
 * ]
 */

router.get('/', (req, res) => {

    Tools.find()
        .then(toolResponse => res.status(200).json(toolResponse))
        .catch(err => res.status(500).json({
            message: 'unexpected error adding your new tool.'
        }))

})

module.exports = router