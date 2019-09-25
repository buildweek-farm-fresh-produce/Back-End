const express = require('express')
const ToolsCategory = require('../models/tool_category_model')
const Tools = require('../models/tool_model.js')
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
        .catch(err => res.status(500).json({error: err}))
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
    const { id } = req.params
    ToolsCategory.findById(id)
        .then( category => res.status(200).json(category))
        .catch( err => res.status(500).json(err))
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
    if(categoryData.name){
        ToolsCategory.add(categoryData)
            .then(category => res.status(201).json(category))
            .catch( err => res.status(500).json({message: 'There was an error creating your category.'}))
    }else{
        res.status(401).json({message: 'Please provide the name for your category.'})
    }
})

module.exports = router