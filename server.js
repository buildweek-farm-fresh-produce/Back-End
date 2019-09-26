const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./auth/auth-router.js')
const consumerRoutes = require('./routes/consumer_routes/consumer_router.js')
const toolRoutes = require('./routes/tools_router.js')
const farmerProduceRoutes = require('./routes/farmer_produce_router.js')
const locationRoutes = require('./routes/location_router.js')
const farmerUser = require('./routes/farmer_user_routes/farmer_user_router.js')
const farmRoutes = require('./routes/farm_router.js')
const farmerVerification = require('./auth/farmer_authentication_middleware')
const consumerVerification = require('./auth/consumer_authentication-middleware')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome'})
})

server.use('/api/consumers',consumerVerification, consumerRoutes)
server.use('/api/auth', authRoutes)
server.use('/api/tools',farmerVerification, toolRoutes)
server.use('/api/farmers/produce',farmerVerification, farmerProduceRoutes)
server.use('/api/locations', locationRoutes)
server.use('/api/farmers',farmerVerification, farmerUser)
server.use('/api/farms',farmerVerification, farmRoutes)


server.use('/docs', express.static('./docs'));

module.exports = server