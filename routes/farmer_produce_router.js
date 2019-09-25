const router = require('express').Router();
const ProduceCategory = require('../models/categories_model.js')

router.get('/categories', (req, res) => {
    return ProduceCategory.find()
        .then(produce => res.status(200).json({categories: 'categories'}))
        .catch( err => res.status(500).json({message: 'unexpected error'}))
})

router.post('/categories', (req, res) => {
    const categoryData = req.body
    if(categoryData.name){
        ProduceCategory.add(categoryData)
            .then( category => res.status(201).json({new_category: category}))
            .catch( err => res.status(500).json(){error: "there has been an unexpected error"})
    }else{
        res.status(400).json({message: 'Please provide a value for the category name'})
    }
})


module.exports = router