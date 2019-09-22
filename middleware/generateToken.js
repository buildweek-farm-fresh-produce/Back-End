const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

function generateToken(user, userType){
    let userRole 

    if(userType === 'farmer'){
        userRole = 'farmer'
    }else if(userType === 'consumer'){
        userRole = 'consumer'
    }
    
    const payload = {
        user: user.username,
        userType: userRole
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = generateToken