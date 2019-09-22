const knex = require('knex')

const config = require('../knexfile.js')

const envirorment = process.env.DB_ENV || 'development'

module.exports = knex(config[envirorment])