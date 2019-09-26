const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(400).json({message: 'No Credential Provided.'})
            }else{
                if(decodedToken.userType === 'consumer'){
                    next();
                }else{
                    res.status(401).json({message: 'Invalid Credentials'})
                }
            }
        })
    }else{
        res.status(401).json({message: 'Missing Credentials'})
    }
}