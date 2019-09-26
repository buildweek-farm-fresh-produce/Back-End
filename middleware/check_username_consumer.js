const Users = require('../models/users/consumer_user_model.js')

function checkUsername(req, res, next){
    const { username } = req.body
    Users.findByUsername(username)
        .then(user => {
            if(user){
                res.status(400).json({message: 'username unavailable'})
            }else{
                next();
            }
        })
        .catch(err => res.status(500).json(err))
}

module.exports = checkUsername