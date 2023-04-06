const express = require('express')
const cors = require('cors')

const routes = require('./routes/index.router')

const app = express()

app.use(cors())
app.disable('etag')

app.use(express.json({ limit: '10mb' }))

app.get('/', (req, res) => res.status(200).send({ version: require('../package.json').version }))
app.use(routes)

module.exports = app