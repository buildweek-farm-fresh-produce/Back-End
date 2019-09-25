const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./auth/auth-router.js')
const consumerRoutes = require('./routes/consumer_routes/consumer_router.js')
const toolRoutes = require('./routes/tools_router.js')
const farmerProduceRoutes = require('./routes/farmer_produce_router.js')
const locationRoutes = require('./routes/location_router.js')
const farmerUser = require('./routes/farmer_user_routes/farmer_user_router.js')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome'})
})

server.use('/api/consumers', consumerRoutes)
server.use('/api/auth', authRoutes)
server.use('/api/tools', toolRoutes)
server.use('/api/farmers/produce', farmerProduceRoutes)
server.use('/api/locations', locationRoutes)
server.use('/api/farmers', farmerUser)



server.use('/docs', express.static('./docs'));

module.exports = server